(function (){
  'use strict';

  angular.module('rms.people', ['ui.router'])
    .config(peopleRouteConfig)
    .controller('peopleController', peopleController);

  peopleRouteConfig.$inject = ['$stateProvider'];
  function peopleRouteConfig($stateProvider) {
    $stateProvider
      .state('people', {
        url: '/people',
        templateUrl: 'people/people.html',
        controller: 'peopleController as peopleCtrl'
      })
      .state('people.create', {
        url: '/new',
        templateUrl: 'people/new.html',
        controller: 'peopleController as peopleCtrl'        
      })
  }

  peopleController.$inject = ['peopleService'];
  function peopleController(peopleService) {
    let peopleCtrl = this;

    peopleCtrl.people = []

    peopleService.getPeople()
      .then(response => {
        peopleCtrl.people.push(...response.data);
      }, error => {
        console.log(error);
      })
      .catch(error => {
        console.log(error);        
      });

    peopleCtrl.savePerson = function() {
      console.log(peopleCtrl.person);
    };
  }
})();