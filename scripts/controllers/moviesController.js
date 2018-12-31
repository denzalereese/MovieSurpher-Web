angular
  .module('movieSurfer')
  .controller('moviesController', moviesController);

moviesController.$inject = ['MovieDiscoverService','$window', '$scope'];

function moviesController(MovieDiscoverService, $window, $scope) {
  var vm = this;

  vm.goBack = function() {
    window.history.back();
  }

  var movies = MovieDiscoverService.getAllMovies().get(onGetAllMoviesSuccess);

  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if (screenWidth <= 500) {
   vm.link = "/MovieSurpher-Web/movies/mobile/";
  }
  else {
    vm.link = "/MovieSurpher-Web/movies/";
  }

  //when the screen is resized, change to mobile or desktop route depending on the resized screen width
  var win = angular.element($window);
  win.bind('resize', function() {
    screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

   if (screenWidth <= 600) {
    vm.link = "/MovieSurpher-Web/movies/mobile/";
    $scope.$apply();
   }
   else {
     vm.link = "/MovieSurpher-Web/movies/";
     $scope.$apply();
   }
  });

  function onGetAllMoviesSuccess(movieJSON) {
    vm.moviesArr = movieJSON.results;
  }

  function onGetMoviesError(err) {
    console.log('There was an error retrieving the movies!');
  }
};
