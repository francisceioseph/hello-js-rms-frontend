(function(){
  'use strict';

  angular.module('rms.people')
  .service('peopleService', PeopleService);

  PeopleService.$inject = ['$http'];
  function PeopleService($http) {
    this.getPeople = function() {
      return $http.get('http://localhost:8080/people', {});
    };

    this.savePerson = function() {
      
    };

    this.deletePerson = function(person_id) {

    };
  }
})();