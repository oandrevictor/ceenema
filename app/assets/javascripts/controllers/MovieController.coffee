controllers = angular.module('controllers')

#This controller gets the information about a specific movie and gives it back to the scope.

controllers.controller("MovieController", [ '$scope', '$routeParams', '$resource','$location', 'flash'
  ($scope,$routeParams,$resource, $location, flash)->
    Movie = $resource('/movies/:movieId', { movieId: "@id", format: 'json' });

    Movie.get({movieId: $routeParams.movieId},
          ( (movie)-> $scope.movie = movie ), #sets the movie case it exists
          ( (httpResponse)-> $scope.movie = null) #sets to null otherwise
      flash.error   = "Movie not found - ID #{$routeParams.movieId}"

    );

    $scope.back = -> $location.path("/");
])