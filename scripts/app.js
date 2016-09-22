angular
  .module('movieSurfer', ['ngResource', 'ui.router'])
  .config(config);

config.$inject = ['$stateProvider', '$locationProvider'];


function config($stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'templates/movies.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController'
    })
    .state('movie', {
      url: '/movies/:movieId',
      templateUrl: 'templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
    });

  $locationProvider.html5Mode({
   enabled: true,
   requireBase: false
 });
}
