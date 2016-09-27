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
            this.currentview.currentPage = targetPage;
            $scope.$parent.$ctrl.setPagination();
            // $log.log(this.currentview);
            // $log.log(`Current page: ${targetPage}`);
          });
        }.bind(this);
      }
    ],

    bindings: {
      currentview: '='
    }
  });
