(function() {
  angular.module('erinanddustin')
          .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'RsvpService', '$http', '$log'];

  function HomeController($scope, RsvpService, $http, $log){
  $scope.rsvps = [];
  $scope.update = update;
  $scope.edit = edit;
  $scope.showList;
  $scope.images = [];
  $scope.confirmRsvp = confirmRsvp;
  $scope.editRsvp = {};

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

    function edit(rsvp){
      rsvp.edit = true;
      $scope.editRsvp = rsvp;
    }

    function update(rsvp){
      $log.debug('HAY BOI', rsvp);
      rsvp.edit = false;
      RsvpService.update(rsvp)
                  .then(function(response){
                    $log.debug('RAYSPAWNCE', response);
                    $log.debug('responseConfigData:', response.config.data);
                    confirmRsvp(response.config.data);
                  });
    }

    function confirmRsvp(rsvp){
      $log.debug('HAY GURL', rsvp);
      rsvp.confirmRsvp = true;
    }

  }

}());
