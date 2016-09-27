'use strict';

angular.
  module('core.movies').
  factory('Movies', ['$resource',
    ($resource) => {
      return $resource('http://www.omdbapi.com', {}, {
        query: {
          method: 'GET',
          params: {
            apikey: '6f0a67d0',
            s: 'iron man'
          }
        }
      });
    }
  ]);
