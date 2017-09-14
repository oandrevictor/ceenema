controllers = angular.module('controllers')
#This Controller
#Creates the search function
#Sends the request to the Database
#Retrieves the result and send to the scope
movies = []
controllers.controller("MoviesController", [ '$scope', '$routeParams', '$location', '$resource',
  ($scope,$routeParams,$location, $resource)->
    $scope.search = (keywords)->  $location.path("/").search('keywords',keywords)
    Movie = $resource('/movies/:movieId', { movieId: "@id", format: 'json' })

    if $routeParams.keywords
      keywords = $routeParams.keywords.toLowerCase()
      $scope.movies = movies.filter (movie)-> movie.name.toLowerCase().indexOf(keywords) != -1
      Movie.query(keywords: $routeParams.keywords, (results)-> $scope.movies = results)
    else
      $scope.movies = []

    $scope.view = (movieId)-> $location.path("/movies/#{movieId}")
])