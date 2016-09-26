'use strict';

angular.
  module('core.movies').
  factory('Movies', ['$resource',
    ($resource) => {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
