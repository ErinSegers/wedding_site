(function() {
  angular.module('erinanddustin')
          .controller('GalleryController', GalleryController);

  GalleryController.$inject = ['$scope', '$http'];

  function GalleryController($scope, $http){
  $scope.images = [];

  getImages();

  function getImages() {
    return $http.get('/image-gallery/')
                .then(function(response){
                  $scope.images = response.data.images;
                });
  }

  }

}());
