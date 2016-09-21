angular
  .module('movieSurfer')
  .controller('moviesController', moviesController);

moviesController.$inject = ['$http'];

function moviesController($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc"
          + "&api_key=c31191ceb90fed5378d03ca7d63d0f21"
    }).then(onGetMoviesSuccess, onGetMoviesError);
}

function onGetMoviesSuccess(json) {
  console.log(json);
}

function onGetMoviesError(err) {
  console.log('There was an error retrieving the movies!');
}
