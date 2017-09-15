var controllers = angular.module('ceenema');
/*This Controller
#Creates the search function
#Sends the request to the Database
#Retrieves the result and send to the scope
*/
movies = []
controllers.controller("MoviesController", [ '$scope', '$routeParams', '$location', '$resource', '$http',
    function($scope,$routeParams,$location, $resource, $http) {

        $scope.posters = {}

        $scope.search = function (keywords) {
            $location.path("/").search('keywords', keywords)
        };

        Movie = $resource('/movies/:movieId', {movieId: "@id", format: 'json'});

        if ($routeParams.keywords) {
            keywords = $routeParams.keywords.toLowerCase();
            $scope.movies = movies.filter(function (movie) {
                movie.name.toLowerCase().indexOf(keywords) != -1
            });
            Movie.query({keywords: $routeParams.keywords},
                (function (results) {
                    $scope.movies = results
                    printitles();

                }))
            console.log($scope.movies.length)
        }
        else {
            $scope.movies = []
        }

        $scope.view = function (movieId) {
            $location.path("/movies/" + movieId)
        }

        var printitles = function() {
            $scope.movies.forEach(function (m) {
                title = m.name;
                if (title == 'Gone Girl'){
                    imdb_id ='tt2267998';
                }
                $scope.posters[imdb_id] = '';

                $http({
                    method: 'GET',
                    url: 'http://www.theimdbapi.org/api/movie?movie_id='+ imdb_id
                }).then(function successCallback(response) {
                    imgur = response.data.poster.large;
                    $scope.posters[imdb_id] = imgur;
                    console.log(imgur)
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });



                    })
            }


    }])