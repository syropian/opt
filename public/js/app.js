(function() {
  var app;

  app = angular.module('opt', ['ngRoute', 'ngAnimate', 'mainCtrl']);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: 'public/templates/index.html',
      controller: 'MainController'
    });
    return $routeProvider.otherwise({
      redirectTo: '/'
    });
  });

}).call(this);
