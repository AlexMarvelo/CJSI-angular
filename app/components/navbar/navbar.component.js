'use strict';

angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'app/components/navbar/navbar.template.html',
    controller: ['$scope',
      function NavbarCtrl($scope) {
        this.homeLink = '#';
        this.homeLinkTitle = 'OMDb Hero';
        // console.log($scope);
      }
    ]
  });
