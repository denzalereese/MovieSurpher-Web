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
    });

  $locationProvider.html5Mode({
   enabled: true,
   requireBase: false
 });
}
