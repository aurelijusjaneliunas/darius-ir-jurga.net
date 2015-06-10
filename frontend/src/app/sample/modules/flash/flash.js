angular.module('myapp')

.factory("flash", function($rootScope) {
    var currentMessage = null,
        msgQueue = [];

    $rootScope.$on("$routeChangeSuccess", function () {
        currentMessage = msgQueue.shift() || null;
    });

    //function getMsg(){
    //    return currentMessage || msgQueue.shift() || null;
    //}

    function setMsg(message, queue) {
        if (queue) {
            msgQueue.push(message);
        } else {
            currentMessage = message;
        }
    }

    return {
        clear: function () {
            currentMessage = null;
        },
        error: function (message, queue) {
            setMsg({
                level: 'error',
                message: message
            }, queue);
        },
        success: function (message, queue) {
            setMsg({
                level: 'success',
                message: message
            }, queue);
        },
        getMessage: function () {
            return currentMessage;
        }
    };
})

.directive('flash', function(flash) {
    return {
        templateUrl: 'sample/modules/flash/flash.html',
        restrict: 'E',
        replace: true,
        scope: true,
        link: function ($scope) {
            $scope.$watch(flash.getMessage, function () {
                $scope.message = flash.getMessage();
            });
        }
    };
});