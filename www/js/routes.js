angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('fondo', {
    url: '/page1',
    templateUrl: 'templates/fondo.html',
    controller: 'fondoCtrl'
  })

  .state('gastosGameco', {
    url: '/page2',
    templateUrl: 'templates/gastosGameco.html',
    controller: 'gastosGamecoCtrl'
  })

  .state('gasto', {
    url: '/page3',
    templateUrl: 'templates/gasto.html',
    controller: 'gastoCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});