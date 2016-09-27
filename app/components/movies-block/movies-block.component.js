angular.
  module('moviesBlock').
  component('moviesBlock', {
    templateUrl: '/app/components/movies-block/movies-block.template.html',

    controller: ['$scope', '$log',
      function MoviesBlockCtrl($scope, $log) {
        this.movies = [];
      }
    ]
  });
