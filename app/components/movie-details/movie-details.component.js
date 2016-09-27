'use strict';

angular.
  module('movieDetails').
  component('movieDetails', {
    templateUrl: '/app/components/movie-details/movie-details.template.html',

    controller: ['$scope', '$log', '$routeParams', 'localStorageService', 'Movies', 'CONFIG',
      function MovieDetailsCtrl($scope, $log, $routeParams, localStorageService, Movies, CONFIG) {
        // $log.log('Movie-details fav', this.favourites);

        this.movie = Movies.get({i: $routeParams.movieID}, (movie) => {
          // $log.log(this.movie);
          this.movie.isFavourite = this.favourites.indexOfByProp({imdbID: $routeParams.movieID}, 'imdbID') !== -1;
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
          if (this.movie.isFavourite) {
            btn.classList.remove('active');
            this.movie.isFavourite = false;
            let movieIndex = this.favourites.indexOfByProp({imdbID: $routeParams.movieID}, 'imdbID');
            if (movieIndex !== -1) {
              this.favourites.splice(movieIndex, 1);
            }
          } else {
            btn.classList.add('active');
            this.movie.isFavourite = true;
            this.favourites.push(this.movie);
          }
          localStorageService.set('favourites', this.favourites);
          // $log.log('Favourites:', this.favourites);
          // $log.log('Local storage:', localStorageService.get('favourites'));
        };
      }
    ],

    bindings: {
      favourites: '='
    }
  });
