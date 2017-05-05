(function() {
  angular.module('erinanddustin')
          .controller('RegistryController', RegistryController);

  RegistryController.$inject = ['$scope', '$window', '$location', '$route', '$timeout'];

  function RegistryController($scope, $window, $location, $route, $timeout){

    $scope.startCount = 0;

    $scope.reloadRoute = function() {
      $scope.startCount = $scope.startCount + 1;
      timeout = $timeout(function() {
        $window.location.reload();
      }, 1000);
      $scope.stopTimeout;
    }

    $scope.stopTimeout = function() {
      $timeout.cancel(timeout);
    }

  }

}());
