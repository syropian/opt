app = angular.module('opt', 
  [
    'ngRoute',
    'ngAnimate',
    'mainCtrl',
  ]
)

app.config ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode(true)
  $routeProvider.when('/', {
    templateUrl: 'public/templates/index.html'
    controller: 'MainController'
  })  
  $routeProvider.otherwise({ redirectTo: '/' })