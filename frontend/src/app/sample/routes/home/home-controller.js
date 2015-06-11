angular.module('myapp')
    .controller('HomeController', function($scope, flash, COORDINATES, WEDDING, Lock, LockData) {

        var ctrl = this;

        $scope.lockData = new Lock(LockData);
        $scope.locker = $scope.lockData.lock;

        //-- aim step

        // count down
        $scope.countdown = {
            end: WEDDING.START_DATE
        };

        $scope.map = {
            center: {
                latitude: COORDINATES.LONG,
                longitude: COORDINATES.LAT
            },
            marker: {
                id: 0,
                coords: {
                    latitude: COORDINATES.LONG,
                    longitude: COORDINATES.LAT
                },
                options: {
                    animation: google.maps.Animation.BOUNCE
                }
            },
            zoom: 8
        };

        //-- waiting step

        //coordinates
        $scope.coords = {
            long: null,
            lat: null
        };

        function completeLock(){
            $scope.lockData.lock = true;
            $scope.lockData.$update().then(function() {
                $scope.locker = true;
                flash.clear();
            }, function() {
                flash.error('Upsss... Something went wrong.');
            });
        }

        function isCoordValid(){
            return $scope.coords.long === COORDINATES.LONG_SHORTHAND &&
                $scope.coords.lat === COORDINATES.LAT_SHORTHAND;
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
