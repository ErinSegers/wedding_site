(function() {
  angular.module('erinanddustin')
          .controller('RegistryController', RegistryController);

  RegistryController.$inject = ['$scope', '$window', '$location', '$route'];

  function RegistryController($scope, $window, $location, $route){

    $scope.reloadRoute = function() {
      $window.location.reload();
    }
  }

}());
