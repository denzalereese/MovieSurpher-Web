angular
  .module('movieSurfer')
  .controller('moviesController', moviesController);

moviesController.$inject = ['MovieDiscoverService','$window', '$scope'];

function moviesController(MovieDiscoverService, $window, $scope) {
  var vm = this;

  var movies = MovieDiscoverService.getAllMovies().get(onGetAllMoviesSuccess);

  var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

  if (screenWidth <= 500) {
   vm.link = "/movies/mobile/";
  }
  else {
    vm.link = "/movies/";
  }

  //when the screen is resized, change to mobile or desktop route depending on the resized screen width
  var win = angular.element($window);
  win.bind('resize', function() {
    screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

   if (screenWidth <= 600) {
    vm.link = "/movies/mobile/";
    $scope.$apply();
   }
   else {
     vm.link = "/movies/";
     $scope.$apply();
   }
  });

  function onGetAllMoviesSuccess(movieJSON) {
    vm.moviesArr = movieJSON.results;
    console.log(vm.moviesArr);
  }

  function onGetMoviesError(err) {
    console.log('There was an error retrieving the movies!');
  }
};
