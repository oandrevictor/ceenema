controllers = angular.module('controllers');

//This controller gets the information about a specific movie and gives it back to the scope.

controllers.controller("MovieController", [ '$scope', '$routeParams', '$resource','$location', 'flash',
function($scope,$routeParams,$resource, $location, flash) {
    //Resource -> Used for CRUD operations
    Movie = $resource('/movies/:movieId', {movieId: "@id", format: 'json'},
        {
            'save': {method: 'PUT'},
            'create': {method: 'POST'}
        }
    );

    if ($routeParams.movieId) {
        Movie.get({movieId: $routeParams.movieId}, function (movie) {
                $scope.movie = movie
            }, //sets the movie case it exists
            function (httpResponse) {
                $scope.movie = null;
                flash.error = "Movie not found - ID #{$routeParams.movieId}";
            }) //sets to null and flash error otherwise
    }
    else {
        $scope.movie = {}
    }
    ;


    $scope.edit = function () {
        $location.path("/movies/" + $scope.movies.id + "/edit");
    }
    $scope.cancel = function(){
        if ($scope.movie.id) {
            $location.path("/movies/" + $scope.movie.id);
        } else {
            $location.path("/")
        }
    }

    $scope.save = function(){
        onError = function(_httpResponse) {
            flash.error = "Something went wrong"
        }

        if ($scope.movie.id) {
            Movie.save($scope.movie)(
                function (){
                    $location.path("/movies/"+$scope.movie.id)
                }, // if saving works as expected
                onError()
            ) //otherwise
        }else {
            Movie.create($scope.movie,
                function (newMovie){
                    $location.path("/movies/"+newMovie.id)
                }, // if creating the new movie works
                onError()
            )
        }
    }

    $scope.delete = function() {
        $scope.movie.$delete()
        $scope.back()
    }




    //Go-back function
    $scope.back = function(){
        $location.path("/");
    };
}
])
