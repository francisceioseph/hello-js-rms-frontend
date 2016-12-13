(function (){
  'use strict';

  angular.module('rms.people', ['ui.router'])
    .config(peopleRouteConfig)
    .controller('peopleController', peopleController);

  peopleRouteConfig.$inject = ['$stateProvider'];
  function peopleRouteConfig($stateProvider) {
    $stateProvider.state('people', {
      url: '/people',
      templateUrl: 'people/people.html',
      controller: 'peopleController as peopleCtrl'
    })
  }

  peopleController.$inject = [];
  function peopleController() {
  }
})();