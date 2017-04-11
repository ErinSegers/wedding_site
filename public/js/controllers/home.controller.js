(function() {
  angular.module('erinanddustin')
          .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'RsvpService', '$http'];

  function HomeController($scope, RsvpService, $http){
  $scope.rsvps = [];
  $scope.update = update;
  $scope.showList;
  $scope.images = [];

  getImages();

  function getImages() {
    return $http.get('/image-gallery/')
                .then(function(response){
                  $scope.images = response.data.images;
                });
  }

  $scope.onKeypress = function (){
    $scope.showList = true;
  };

  getRsvps();

  function getRsvps(){
      RsvpService.getAll()
                  .then(function(response){
                    $scope.rsvps = response.data.rsvps;
                  });
    }

  function update(rsvp){
      rsvp.edit = false;
      RsvpService.update(rsvp)
                  .then(function(response){
                    getRsvps();
                  });
    }

  }

}());
