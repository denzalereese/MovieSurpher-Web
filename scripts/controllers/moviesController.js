angular
  .module('movieSurfer')
  .controller('moviesController', moviesController);

moviesController.$inject = ['MovieDiscoverService'];

function moviesController(MovieDiscoverService) {
  var vm = this;

  var movies = MovieDiscoverService.get(onGetMoviesSuccess);

  function onGetMoviesSuccess(movieJSON) {
    vm.moviesArr = movieJSON.results;
    console.log(vm.moviesArr);
  }

  function onGetMoviesError(err) {
    console.log('There was an error retrieving the movies!');
  }

}
