(function () {
  'use strict';

  angular.module('rms', ['ui.router'])
    .config(mainRouterConfig)
    .controller('mainController', mainController);

  mainRouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function mainRouterConfig($stateProvider, $urlRouterProvider){
    let mainState = {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'mainController as main'
    }

    $stateProvider.state(mainState);
    $urlRouterProvider.otherwise('/');
  }

  function mainController() {

  }
})();