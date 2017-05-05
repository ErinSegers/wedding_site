(function() {
  angular.module('erinanddustin')
          .controller('RegistryController', RegistryController);

  RegistryController.$inject = ['$scope', '$window', '$location', '$route', '$timeout'];

  function RegistryController($scope, $window, $location, $route, $timeout){

    $scope.reloadRoute = $timeout(function() {
      $window.location.reload();
    }, 3000, 1);

  }

}());
