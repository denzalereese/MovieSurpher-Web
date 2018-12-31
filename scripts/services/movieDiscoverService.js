angular.module('movieSurfer')
       .service('MovieDiscoverService', MovieDiscoverService);

MovieDiscoverService.$inject = ['$resource'];

function MovieDiscoverService($resource) {
  var movieDiscoverService = this;

  movieDiscoverService.getAllMovies = function() {
    return $resource("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc"
                    + "&api_key=c31191ceb90fed5378d03ca7d63d0f21");
    }

  movieDiscoverService.getTrailers = function(movieId) {
    return $resource("https://api.themoviedb.org/3/movie/" + movieId + "/videos?"
    + "api_key=c31191ceb90fed5378d03ca7d63d0f21")
  }

  movieDiscoverService.getReviews = function(movieId) {
    return $resource("https://api.themoviedb.org/3/movie/" + movieId + "/reviews?"
    + "api_key=c31191ceb90fed5378d03ca7d63d0f21");
  }
}
