/**
 * Testing pagUsers Controller
 */
describe('gitUsers', function () {
    var $controller;
    var $gtu_generic_obj;

    beforeEach(module('myApp'));

    // Store references to $controller
    beforeEach(inject(function(_$controller_) {
        //for controller
        $controller = _$controller_;

        //for factory
        var $injector = angular.injector(['myApp']);
        gtu_generic_obj = $injector.get('gtu_generic_obj');
    }));


    /**
     * Testing function `$scope.handle_callback_data`
     */
    it('Should extract name and path to github repository page', function () {
        var $scope = {};
        var controller = $controller('pagUsersController', { $scope: $scope });
        var callback_data = {
            "meta": {
                "Content-Type": "application/javascript; charset=utf-8",
                "X-RateLimit-Limit": "60",
                "X-RateLimit-Remaining": "56",
                "X-RateLimit-Reset": "1483707197",
                "Cache-Control": "public, max-age=60, s-maxage=60",
                "Vary": "Accept",
                "ETag": "\"8568e899a7f660d1c1e1ad7f15a9035f\"",
                "X-GitHub-Media-Type": "github.v3; format=json",
                "status": 200
            },
            "data": [
                {
                    "id": 68439317,
                    "name": "dotfiles",
                    "full_name": "radu/dotfiles",
                    "owner": {
                        "login": "radu",
                        "id": 46443,
                        "avatar_url": "https://avatars.githubusercontent.com/u/46443?v=3",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/radu",
                        "html_url": "https://github.com/radu",
                        "followers_url": "https://api.github.com/users/radu/followers",
                        "following_url": "https://api.github.com/users/radu/following{/other_user}",
                        "gists_url": "https://api.github.com/users/radu/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/radu/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/radu/subscriptions",
                        "organizations_url": "https://api.github.com/users/radu/orgs",
                        "repos_url": "https://api.github.com/users/radu/repos",
                        "events_url": "https://api.github.com/users/radu/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/radu/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "private": false,
                    "html_url": "https://github.com/radu/dotfiles",
                    "description": "simple dotfiles config with zplug and spf13-vim",
                    "fork": false,
                    "url": "https://api.github.com/repos/radu/dotfiles",
                    "forks_url": "https://api.github.com/repos/radu/dotfiles/forks",
                    "keys_url": "https://api.github.com/repos/radu/dotfiles/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/radu/dotfiles/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/radu/dotfiles/teams",
                    "hooks_url": "https://api.github.com/repos/radu/dotfiles/hooks",
                    "issue_events_url": "https://api.github.com/repos/radu/dotfiles/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/radu/dotfiles/events",
                    "assignees_url": "https://api.github.com/repos/radu/dotfiles/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/radu/dotfiles/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/radu/dotfiles/tags",
                    "blobs_url": "https://api.github.com/repos/radu/dotfiles/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/radu/dotfiles/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/radu/dotfiles/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/radu/dotfiles/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/radu/dotfiles/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/radu/dotfiles/languages",
                    "stargazers_url": "https://api.github.com/repos/radu/dotfiles/stargazers",
                    "contributors_url": "https://api.github.com/repos/radu/dotfiles/contributors",
                    "subscribers_url": "https://api.github.com/repos/radu/dotfiles/subscribers",
                    "subscription_url": "https://api.github.com/repos/radu/dotfiles/subscription",
                    "commits_url": "https://api.github.com/repos/radu/dotfiles/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/radu/dotfiles/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/radu/dotfiles/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/radu/dotfiles/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/radu/dotfiles/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/radu/dotfiles/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/radu/dotfiles/merges",
                    "archive_url": "https://api.github.com/repos/radu/dotfiles/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/radu/dotfiles/downloads",
                    "issues_url": "https://api.github.com/repos/radu/dotfiles/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/radu/dotfiles/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/radu/dotfiles/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/radu/dotfiles/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/radu/dotfiles/labels{/name}",
                    "releases_url": "https://api.github.com/repos/radu/dotfiles/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/radu/dotfiles/deployments",
                    "created_at": "2016-09-17T07:53:15Z",
                    "updated_at": "2016-09-17T08:00:08Z",
                    "pushed_at": "2016-09-20T22:07:56Z",
                    "git_url": "git://github.com/radu/dotfiles.git",
                    "ssh_url": "git@github.com:radu/dotfiles.git",
                    "clone_url": "https://github.com/radu/dotfiles.git",
                    "svn_url": "https://github.com/radu/dotfiles",
                    "homepage": "",
                    "size": 6,
                    "stargazers_count": 0,
                    "watchers_count": 0,
                    "language": "Shell",
                    "has_issues": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 0,
                    "mirror_url": null,
                    "open_issues_count": 0,
                    "forks": 0,
                    "open_issues": 0,
                    "watchers": 0,
                    "default_branch": "master"
                }
            ]
        }
        $scope.handle_callback_data(callback_data);
        expect($scope.user_data).toEqual([
                {
                    "id": 68439317,
                    "name": "dotfiles",
                    "full_name": "radu/dotfiles",
                    "owner": {
                        "login": "radu",
                        "id": 46443,
                        "avatar_url": "https://avatars.githubusercontent.com/u/46443?v=3",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/radu",
                        "html_url": "https://github.com/radu",
                        "followers_url": "https://api.github.com/users/radu/followers",
                        "following_url": "https://api.github.com/users/radu/following{/other_user}",
                        "gists_url": "https://api.github.com/users/radu/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/radu/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/radu/subscriptions",
                        "organizations_url": "https://api.github.com/users/radu/orgs",
                        "repos_url": "https://api.github.com/users/radu/repos",
                        "events_url": "https://api.github.com/users/radu/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/radu/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "private": false,
                    "html_url": "https://github.com/radu/dotfiles",
                    "description": "simple dotfiles config with zplug and spf13-vim",
                    "fork": false,
                    "url": "https://api.github.com/repos/radu/dotfiles",
                    "forks_url": "https://api.github.com/repos/radu/dotfiles/forks",
                    "keys_url": "https://api.github.com/repos/radu/dotfiles/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/radu/dotfiles/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/radu/dotfiles/teams",
                    "hooks_url": "https://api.github.com/repos/radu/dotfiles/hooks",
                    "issue_events_url": "https://api.github.com/repos/radu/dotfiles/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/radu/dotfiles/events",
                    "assignees_url": "https://api.github.com/repos/radu/dotfiles/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/radu/dotfiles/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/radu/dotfiles/tags",
                    "blobs_url": "https://api.github.com/repos/radu/dotfiles/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/radu/dotfiles/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/radu/dotfiles/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/radu/dotfiles/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/radu/dotfiles/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/radu/dotfiles/languages",
                    "stargazers_url": "https://api.github.com/repos/radu/dotfiles/stargazers",
                    "contributors_url": "https://api.github.com/repos/radu/dotfiles/contributors",
                    "subscribers_url": "https://api.github.com/repos/radu/dotfiles/subscribers",
                    "subscription_url": "https://api.github.com/repos/radu/dotfiles/subscription",
                    "commits_url": "https://api.github.com/repos/radu/dotfiles/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/radu/dotfiles/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/radu/dotfiles/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/radu/dotfiles/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/radu/dotfiles/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/radu/dotfiles/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/radu/dotfiles/merges",
                    "archive_url": "https://api.github.com/repos/radu/dotfiles/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/radu/dotfiles/downloads",
                    "issues_url": "https://api.github.com/repos/radu/dotfiles/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/radu/dotfiles/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/radu/dotfiles/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/radu/dotfiles/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/radu/dotfiles/labels{/name}",
                    "releases_url": "https://api.github.com/repos/radu/dotfiles/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/radu/dotfiles/deployments",
                    "created_at": "2016-09-17T07:53:15Z",
                    "updated_at": "2016-09-17T08:00:08Z",
                    "pushed_at": "2016-09-20T22:07:56Z",
                    "git_url": "git://github.com/radu/dotfiles.git",
                    "ssh_url": "git@github.com:radu/dotfiles.git",
                    "clone_url": "https://github.com/radu/dotfiles.git",
                    "svn_url": "https://github.com/radu/dotfiles",
                    "homepage": "",
                    "size": 6,
                    "stargazers_count": 0,
                    "watchers_count": 0,
                    "language": "Shell",
                    "has_issues": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": false,
                    "forks_count": 0,
                    "mirror_url": null,
                    "open_issues_count": 0,
                    "forks": 0,
                    "open_issues": 0,
                    "watchers": 0,
                    "default_branch": "master"
                }
            ]
        );
    });


    /**
     * Testing function `$scope.clear_interval`
     */
    it('Should clear timer var', function () {
        var $scope = {};
        var controller = $controller('pagUsersController', {$scope: $scope});
        $scope.gtu_timer = 8;
        $scope.clear_interval(0);
        expect($scope.gtu_timer).toEqual(0);
    });


    /**
     * Testing factory function `app_trim`
     */
    it('Should remove spaces from the begging and end of a string', function() {
        var output = gtu_generic_obj.app_trim(' string  ');
        expect(output).toBe('string');
    });

});