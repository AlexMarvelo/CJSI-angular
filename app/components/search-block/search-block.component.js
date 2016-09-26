'use strict';

angular.
  module('searchBlock').
  component('searchBlock', {
    templateUrl: 'app/components/search-block/search-block.template.html',
    controller: ['$scope',
      function NavbarCtrl($scope) {
        // var self = this;
        //
        // $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
        //   self.phone = response.data;
        // });
      }
    ]
  });
