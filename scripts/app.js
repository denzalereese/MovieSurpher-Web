angular
  .module('movieSurfer', ['ngResource', 'ui.router'])
  .config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];


function config($stateProvider, $locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'templates/movies.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController'
    })
    .state('movieScroller', {
      url:'/movies',
      templateUrl: 'templates/movieScroller.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController',
      abstract: true
    })
    .state('movieScroller.details', {
      url:'/:movieId',
      templateUrl: 'templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
    })
    .state('movieDetails', {
      url:'/movies/mobile/:movieId',
      templateUrl: 'templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
    });

/*  $locationProvider.html5Mode({
   enabled: true,
   requireBase: false
 });*/
}
