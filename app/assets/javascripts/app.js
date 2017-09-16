ceenema = angular.module('ceenema',[
  'templates',
  'ngRoute',
  'ngResource',
  'ngMaterial',
  'controllers',
  'angular-flash.service',
  'angular-flash.flash-alert-directive',
  'treasure-overlay-spinner'

])

ceenema.config([ '$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
      $routeProvider
          .when('/',
              {
                  templateUrl: "index.html",
                  controller: 'MoviesController'
              }
          ).when('/movies/new',
          {
              templateUrl: "form.html",
              controller: 'MovieController'
          }
          ).when('/movies/:movieId',
          {
              templateUrl: "show_movie.html",
              controller: 'MovieController'
          }
          ).when('/movies/:movieId/edit',
          {
              templateUrl: "form.html",
              controller: 'MovieController'
          }
          )

      //$locationProvider.html5Mode(true)
      //$locationProvider.hashPrefix('')
  }

])

var run = function($scope) {
    $scope.spinner = {active: true};

}

ceenema.run(run);
run.$inject = ['$rootScope'];



controllers = angular.module('controllers',[])