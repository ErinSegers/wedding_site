(function() {
  angular.module('erinanddustin')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'html/views/home.html',
      })
      .otherwise({
        redirectTo: '/',
        restricted: {
          access: false
        }
      });
  }
}());
