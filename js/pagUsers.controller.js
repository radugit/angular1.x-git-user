/**
 * Will handle calback response
 * @param param_obj: the callback data
 */
function jsonp_callback(param_obj) {
    //console.log(param_obj);
    //getting the scope
    var scope = angular.element(document.getElementsByClassName("gtu-container")).scope();

    //call send callback data to the function that handles this
    scope.handle_callback_data(param_obj);

    //stop counter
    scope.clear_interval(0);
}


/**
 * Controller for Git user data
 */
myApp.controller('pagUsersController', ['$scope', '$routeParams', '$http', '$interval', 'gtu_generic_obj', function($scope, $routeParams, $http, $interval, gtu_generic_obj) {
    //will hold the timer
    $scope.gtu_timer = 0;
    $scope.gtu_interval_obj = '';

    //will hold the users data
    $scope.user_data = [];


    /**
     * Get provided user and call the function to make the jsonp call
     * test: goeuro - many //octocat1 - no repos // radu - 3 repos
     */
    $scope.get_user_repos = function() {
        //empty old data
        $scope.user_data = [];

        //make json call
        $scope.make_jsonp_call(gtu_generic_obj.app_trim($scope.user_name));
    }


    /**
     * Will make the jsonp call
     * @param git_user: the provided git user
     */
    $scope.make_jsonp_call = function(git_user) {
        if(git_user!=undefined && git_user!='') {
            //make the call
            $http.jsonp("https://api.github.com/users/" + git_user + "/repos?callback=jsonp_callback");

            //increase timer
            $scope.gtu_interval_obj = $interval(function(){
                $scope.gtu_timer++;
                if($scope.gtu_timer > 7) {
                    $scope.clear_interval(1);
                }
            }, 1000);

        } else {
            //error if no git user given
            alert('Please provide a git user name !');
        }
    }


    /**
     * Will handle callback data
     * @param param_obj: the callback data
     */
    $scope.handle_callback_data = function(param_obj) {
        try {
            if(typeof(param_obj)==="object" && param_obj!=null && "data" in param_obj) {
                if(Array.isArray(param_obj.data)) {
                    //check array length
                    if(!param_obj.data.length) {
                        //message git user with no repos
                        alert('This user has no repository on Github !');
                    } else {
                        //adding callback data to scope vars to be displayed
                        $scope.user_data = param_obj.data;
                    }

                } else if(typeof(param_obj.data)==="object" && param_obj.data!=null && "message" in param_obj.data) {
                    //git user not found
                    alert('Git user not found !');

                } else {
                    throw "incorrect formatted callback data";
                }
            } else {
                throw "incorrect formatted callback data";
            }
        } catch (e){
            //error if no git user given
            alert('Something went wrong, received data not in correct format !');
        }
    }


    /**
     * Clear timer interval
     * @param msg: if to show message
     */
    $scope.clear_interval = function(msg) {
        $interval.cancel($scope.gtu_interval_obj);
        $scope.gtu_timer = 0;
        if(msg) {
            alert('Looks like the server is unresponsive right now, please try again later !');
        }
    }

}]);