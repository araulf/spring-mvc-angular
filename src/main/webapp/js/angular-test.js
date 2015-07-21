angular.module('angularTestApp', [])
    .controller('TestController', ['$scope', '$http', '$log', function($scope, $http, $log) {
        $scope.result = 'not set';
        $log.log('initialised');

        $scope.getHello = function() {
            $log.log('$scope.getHello');
            $http.get('api/hello').
                success(function(data) {
                    $log.log(data);
                    $scope.result = data
                }).
                error(function(data) {
                    $log.error(data);
                });
        };
    }]);