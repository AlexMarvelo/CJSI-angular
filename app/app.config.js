'use strict';

angular
  .module('OMDbHero')
    .config([
      '$locationProvider',
      '$routeProvider',
      ($locationProvider, $routeProvider) => {
        $locationProvider.hashPrefix('');
        $routeProvider.
          when('/', {
            template: '<movies-block></movies-block>'
          }).
          when('/movies/:page', {
            template: '<movies-block></movies-block>'
          }).
          otherwise('/');  
        $locationProvider.html5Mode(true);
      }])

    .constant('CONFIG', {
      'moviesPerPage': 10,
      'omdbAPI': '6f0a67d0'
    });
