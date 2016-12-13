(function() {
  'use strict';

  angular.module('rms', ['ui.router', 'rms.people'])
    .config(mainRouterConfig)

  mainRouterConfig.$inject = ['$urlRouterProvider'];
  function mainRouterConfig($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
  }
})();