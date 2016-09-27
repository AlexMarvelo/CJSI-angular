'use strict';

angular.
  module('moviesBlock').
  component('searchBlock', {
    templateUrl: '/app/components/movies-block/search-block/search-block.template.html',

    controller: ['$scope', '$log', 'CONFIG', 'Movies',
      function SearchBlockCtrl($scope, $log, CONFIG, Movies) {
        this.blockTitle = `Welcome to ${CONFIG.appName}`;

        this.onSearchSubmit = function(event, targetPage = 1) {
          event.preventDefault();
          this.currentview = Movies.get({
            s: this.qstring,
            y: this.qyear,
            type: this.qtype,
            page: targetPage
          }, () => {
            if (this.currentview.Response === 'True') {
              this.currentview.currentPage = targetPage;
            } else {
              targetPage = 1;
              this.currentview = {
                Search: [],
                totalResults: 1,
                currentPage: 1
              };
            }
            $scope.$parent.$ctrl.updateMoviesList();
          });
        }.bind(this);
      }
    ],

    bindings: {
      currentview: '='
    }
  });
