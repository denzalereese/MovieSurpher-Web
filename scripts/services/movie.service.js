angular.module('movieSurfer')
       .service('MovieService', MovieService);

MovieService.$inject = ['$resource'];

function MovieService($resource) {
  return $resource("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc"
                    + "&api_key=c31191ceb90fed5378d03ca7d63d0f21");
}
