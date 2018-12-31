angular
  .module('movieSurfer', ['ngResource', 'ui.router', 'ngAnimate'])
  .config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];


function config($stateProvider, $locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/MovieSurpher-Web/templates/movies.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController'
    })
    .state('movieScroller', {
      url:'/movies',
      templateUrl: '/MovieSurpher-Web/templates/movieScroller.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController',
      abstract: true
    })
    .state('movieScroller.details', {
      url:'/:movieId',
      templateUrl: '/MovieSurpher-Web/templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
    })
    .state('movieDetails', {
      url:'/movies/mobile/:movieId',
      templateUrl: '/MovieSurpher-Web/templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
  });
}
