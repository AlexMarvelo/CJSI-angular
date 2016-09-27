angular.
  module('moviesBlock').
  component('moviesBlock', {
    templateUrl: '/app/components/movies-block/movies-block.template.html',

    controller: ['$scope', '$log', 'CONFIG',
      function MoviesBlockCtrl($scope, $log, CONFIG) {
        this.currentView = {
          totalResults: 1,
          currentPage: 1
        };

        this.setPagination = function() {
          this.pagination = [];
          let totalPages = Math.ceil(this.currentView.totalResults / CONFIG.moviesPerPage);
          let currentPage = this.currentView.currentPage;
          if (totalPages <= 1) return;
          for(let i = 0; i < totalPages; i++) {
            if (Math.abs(i - 1) > 4 &&
                Math.abs(i - currentPage) > 4 &&
                Math.abs(i - totalPages) > 4) continue;
            this.pagination.push({
              name: i+1,
              number: i+1,
              link: '#',
              active: currentPage === i+1
            });
          }
        };
        this.setPagination();

        this.onPaginationClick = function(event) {
          event.preventDefault();
          let targetPage = parseInt(event.target.dataset.id);
          if (!targetPage) return;
          $scope.$$childHead.$ctrl.onSearchSubmit(new Event('submit'), targetPage);
        };
      }
    ]
  });
