/**
 * App module
 */
var myApp = angular.module('myApp', ['ngRoute']);


/**
 * Configuring routes
 */
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'pagUsersController',
                templateUrl: '/templates/pagUsers_view.html'
            })
});


/**
 * Generic app object
 */
myApp.factory('gtu_generic_obj', function () {
    return {
        app_trim: function(value) {
            var ret_val = '';
            if(value!=undefined && value!='') {
                ret_val = value.replace(/^\s+|\s+$/g, ''); // you could use .trim, but it's not going to work in IE<9
            }

            return ret_val;
        }
    }
});