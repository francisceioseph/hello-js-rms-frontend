(function () {
  'use strict';

  angular.module('rms', ['ui.router'])
    .config(mainRouterConfig)
    .controller('mainController', mainController);

  mainRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function mainRouterConfig($stateProvider, $urlRouterProvider){
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'mainController as main'
    });

    $urlRouterProvider.otherwise('/');
  }
  
  function mainController() {

  }
})();