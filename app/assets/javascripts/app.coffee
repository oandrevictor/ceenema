ceenema = angular.module('ceenema',[
  'templates',
  'ngRoute',
  'ngResource',
  'controllers',
  'angular-flash.service',
  'angular-flash.flash-alert-directive'
])

ceenema.config([ '$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
      templateUrl: "index.html"
      controller: 'MoviesController'
    ).when('/movies/:movieId',
      templateUrl: "show_movie.html"
      controller: 'MovieController'
    )
])

controllers = angular.module('controllers',[])