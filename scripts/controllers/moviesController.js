angular
  .module('movieSurfer')
  .controller('moviesController', moviesController);

moviesController.$inject = ['MovieService'];

function moviesController(MovieService) {
  var vm = this;

  var movies = MovieService.get(onGetMoviesSuccess);

}

function onGetMoviesSuccess(json) {
  console.log(json);
}

function onGetMoviesError(err) {
  console.log('There was an error retrieving the movies!');
}
