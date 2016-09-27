'use strict';

angular
  .module('OMDbHero')
    .config([
      '$locationProvider',
      '$routeProvider',
      'localStorageServiceProvider',
      ($locationProvider, $routeProvider, localStorageServiceProvider) => {
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
        $routeProvider.
          when('/', {
            template: '<movies-block></movies-block>'
          }).
          when('/movie/:movieID', {
            template: '<movie-details></movie-details>'
          }).
          otherwise('/');

        localStorageServiceProvider
          .setPrefix('omdbhero');
      }])

    .constant('CONFIG', {
      'moviesPerPage': 10,
      'omdbAPI': '6f0a67d0',
      'appName': 'OMDb Hero'
    });
