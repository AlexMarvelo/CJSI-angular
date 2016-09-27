'use strict';

angular.
  module('core.movies').
  factory('Movies', ['$resource', 'CONFIG',
    ($resource, CONFIG) => {
      return $resource('http://www.omdbapi.com', {}, {
        query: {
          method: 'GET',
          params: {
            apikey: CONFIG.omdbAPI,
            s: 'iron man'
          }
        }
      });
    }
  ]);
