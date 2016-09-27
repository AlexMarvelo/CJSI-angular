'use strict';

angular.
  module('movieDetails').
  component('movieDetails', {
    templateUrl: '/app/components/movie-details/movie-details.template.html',

    controller: ['$scope', '$log', '$routeParams', 'Movies', 'CONFIG',
      function MovieDetailsCtrl($scope, $log, $routeParams, Movies, CONFIG) {
        this.movie = Movies.get({i: $routeParams.movieID}, (movie) => {
          // $log.log(this.movie);
          this.tableDetails = {};
          let skippingKeys = ['Title', 'Rated', 'Director', 'Plot', 'Poster', 'Response', 'imdbID'];
          for (let key in this.movie) {
            if (!this.movie.hasOwnProperty(key) ||
                skippingKeys.indexOf(key) !== -1 ||
                this.movie[key] === 'N/A') continue;
            this.tableDetails[key] = this.movie[key];
          }
        });
        this.staticText = {
          tableHeader: 'Movie details',
        };

        this.toggleFavourite = function(event) {
          event.preventDefault();
          let btn = findAncestor(event.target, 'btn-favourite');
          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
          } else {
            btn.classList.add('active');
          }
        };
      }
    ]
  });
