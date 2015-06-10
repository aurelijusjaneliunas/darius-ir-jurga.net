angular.module('myapp').config(function($routeProvider) {
    $routeProvider.when('/', {
        name: 'home',
        templateUrl: 'sample/routes/home/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl',
        resolve: {
            LockData: function(Lock, LOCKER) {
                var lockData = Lock.get({
                    slug: LOCKER.PAGE_LOCK
                });
                return lockData.$promise;
            }
        }

    });
});
