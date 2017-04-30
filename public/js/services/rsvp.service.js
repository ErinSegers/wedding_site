(function() {
  angular.module('erinanddustin')
        .factory('RsvpService', RsvpService);

  RsvpService.$inject = ['$http', '$window'];

  function RsvpService($http, $window){

    var base = '/rsvps';

    function getAll(){
      return $http.get(base);
    }

    function update(rsvp){
      return $http.put(`${base}/${rsvp._id}`, rsvp);
    }

    return {
      getAll: getAll,
      update: update
    };
  }

}());
