'use strict';

angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'app/components/navbar/navbar.template.html',
    controller: ['$scope',
      function NavbarCtrl($scope) {
        this.homeLink = '#';
        this.homeLinkTitle = 'OMDb Hero';

        // var self = this;
        //
        // $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
        //   self.phone = response.data;
        // });

        // console.log($scope);
      }
    ]
  });
