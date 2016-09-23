angular
  .module('movieSurfer')
  .controller('moviesShowController', moviesShowController);

moviesShowController.$inject = ['$stateParams', 'MovieDiscoverService'];

function moviesShowController($stateParams, MovieDiscoverService) {
  var vm = this;

  vm.movieId = $stateParams.movieId;

  MovieDiscoverService.get(onGetMoviesSuccess);


  //Creates array of all the movie ids in the movie array
  //finds the index of the clicked movie's id in the arrray
  //sets vm.movie to the movie object at the index in the original movie array
  function onGetMoviesSuccess(movieJSON) {
    var moviesArr = movieJSON.results;
    var movieIds = [];
    moviesArr.forEach(function(movie) {
      movieIds.push(movie.id);
    });

    var movieIndex = movieIds.indexOf(parseInt(vm.movieId));
    vm.movie = moviesArr[movieIndex];
  }
}
