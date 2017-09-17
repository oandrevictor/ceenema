ceenema = angular.module('ceenema',[
    'templates',
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'controllers',
    'angular-flash.service',
    'angular-flash.flash-alert-directive',
    'treasure-overlay-spinner',
    'ksSwiper'

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
          ).when('/search' ,
          {
              templateUrl: "search.html",
              controller: 'SearchController'
          }
          )



      //$locationProvider.html5Mode(true)
      //$locationProvider.hashPrefix('')
  }

])

ceenema.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});


//Spinner Initialization
var run = function($scope) {
    $scope.spinner = {active: true};

}

ceenema.run(run);
run.$inject = ['$rootScope'];

controllers = angular.module('controllers',[])