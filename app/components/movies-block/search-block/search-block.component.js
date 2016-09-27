'use strict';

angular.
  module('moviesBlock').
  component('searchBlock', {
    templateUrl: '/app/components/movies-block/search-block/search-block.template.html',

    controller: ['$scope', '$log', 'Movies',
      function SearchBlockCtrl($scope, $log, Movies) {
        this.onSearchSubmit = function(event) {
          event.preventDefault();
          this.movies = Movies.get({
            s: this.qstring,
            y: this.qyear,
            type: this.qtype
          }, () => {
            // $log.log(this.movies);
          });
        }.bind(this);
      }
    ],

    bindings: {
      movies: '='
    }
  });
