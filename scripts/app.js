angular
  .module('movieSurfer', ['ngResource', 'ui.router', 'ngAnimate'])
  .config(config);

config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];


function config($stateProvider, $locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url:'/MovieSurpher-Web/',
      templateUrl: '/MovieSurpher-Web/templates/movies.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController'
    })
    .state('movieScroller', {
      url:'/MovieSurpher-Web/movies',
      templateUrl: '/MovieSurpher-Web/templates/movieScroller.html',
      controllerAs: 'moviesCtrl',
      controller: 'moviesController',
      abstract: true
    })
    .state('movieScroller.details', {
      url:'/MovieSurpher-Web/:movieId',
      templateUrl: '/MovieSurpher-Web/templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
    })
    .state('movieDetails', {
      url:'/MovieSurpher-Web/movies/mobile/:movieId',
      templateUrl: '/MovieSurpher-Web/templates/movieDetails.html',
      controllerAs: 'moviesShowCtrl',
      controller: 'moviesShowController'
  });
}
