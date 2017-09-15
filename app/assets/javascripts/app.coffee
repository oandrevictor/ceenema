ceenema = angular.module('ceenema',[
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
  'angular-flash.service',
  'angular-flash.flash-alert-directive'
])

ceenema.config([ '$routeProvider', '$locationProvider',
  ($routeProvider, $locationProvider)->
    $routeProvider
      .when('/',
      templateUrl: "index.html"
      controller: 'MoviesController'
    ).when('/movies/:movieId',
      templateUrl: "show_movie.html"
      controller: 'MovieController'
    )
    #$locationProvider.html5Mode(true)
    #$locationProvider.hashPrefix('')
])

controllers = angular.module('controllers',[])