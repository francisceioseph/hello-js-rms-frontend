(function() {
  'use strict';

  angular.module('rms', ['ui.router', 'ui.bootstrap', 'rms.people'])
    .config(mainRouterConfig)

  mainRouterConfig.$inject = ['$urlRouterProvider'];
  function mainRouterConfig($urlRouterProvider){
    $urlRouterProvider.otherwise('/people');
  }
})();