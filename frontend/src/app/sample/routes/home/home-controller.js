angular.module('myapp')
    .controller('HomeController', function($scope, flash, COORDINATES, Lock, LockData) {

        $scope.lockData = new Lock(LockData);

        var ctrl = this;

        $scope.coords = {
            long: null,
            lat: null
        };

        function completeLock(){
            $scope.lockData.lock = true;
            $scope.lockData.$update().then(function() {
                flash.clear();
            }, function() {
                flash.error('Upsss... Something went wrong.');
            });
        }

        function isCoordValid(){
            return $scope.coords.long === COORDINATES.LONG &&
                $scope.coords.lat === COORDINATES.LAT;
        }

        ctrl.lock = function(form){
            if (form.$valid){
                if (isCoordValid()){
                    completeLock();
                } else {
                    flash.error('Common! I\'m sure you could be a better man.');
                }
            }
        };

    });
