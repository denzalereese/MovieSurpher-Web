angular
  .module('movieSurfer')
  .controller('moviesController', moviesController);

moviesController.$inject = ['MovieDiscoverService'];

function moviesController(MovieDiscoverService) {
  var vm = this;

  var movies = MovieDiscoverService.get(onGetMoviesSuccess);

  function onGetMoviesSuccess(movieJSON) {
    vm.moviesArr = movieJSON.results;
  }

  function onGetMoviesError(err) {
    console.log('There was an error retrieving the movies!');
  }

}
