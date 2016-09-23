angular
  .module('movieSurfer')
  .controller('moviesShowController', moviesShowController);

moviesShowController.$inject = ['$stateParams', 'MovieDiscoverService', '$sce', '$scope'];

function moviesShowController($stateParams, MovieDiscoverService, $sce, $scope) {
  var vm = this;

  //checks if trailers have already been loaded so that they
  //are only loaded once. it's slow :)
  var trailersAlreadyLoaded = false;
  var reviewsAlreadyLoaded = false;

  vm.movieId = $stateParams.movieId;

  MovieDiscoverService.getAllMovies().get(onGetAllMoviesSuccess);

  //Creates array of all the movie ids in the movie array
  //finds the index of the clicked movie's id in the arrray
  //sets vm.movie to the movie object at the index in the original movie array
  function onGetAllMoviesSuccess(movieJSON) {
    var moviesArr = movieJSON.results;
    var movieIds = [];
    moviesArr.forEach(function(movie) {
      movieIds.push(movie.id);
    });

    var movieIndex = movieIds.indexOf(parseInt(vm.movieId));
    vm.movie = moviesArr[movieIndex];
   }


  function onGetTrailersSuccess(trailerJSON) {
    console.log(trailerJSON);
    var trailersArr = trailerJSON.results;
     vm.trailerURLs = [];

    trailersArr.forEach(function(trailer) {
      var trailerUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + trailer.key);
      vm.trailerURLs.push(trailerUrl);
      });

  }

  function onGetReviewsSuccess(reviewJSON) {
    vm.reviewsArr = reviewJSON.results;
    console.log(vm.reviewsArr);

  }

  $('.collapsible').collapsible({
      accordion : false
    });

  $('#trailers-container').click(function() {
      if(!trailersAlreadyLoaded) {
        MovieDiscoverService.getTrailers(vm.movieId).get(onGetTrailersSuccess);
        trailersAlreadyLoaded = true;
      }
  });

  $('#reviews-container').click(function() {
      if(!reviewsAlreadyLoaded) {
        MovieDiscoverService.getReviews(vm.movieId).get(onGetReviewsSuccess);
        reviewsAlreadyLoaded = true;
      }
  });

}
