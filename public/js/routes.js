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
      // .when('/registry', {
      //   controller: '',
      //   templateUrl: 'html/views/registry.html',
      // })
      .when('/gallery', {
        controller: '',
        templateUrl: 'html/views/gallery.html',
      })
      .when('/atx', {
        controller: '',
        templateUrl: 'html/views/atx.html',
      })
      .when('/registry', {
        controller: '',
        templateUrl: 'html/views/registry.html',
      })
      .otherwise({
        redirectTo: '/',
        restricted: {
          access: false
        }
      });
  }
}());
