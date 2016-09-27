'use strict';

angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'app/components/navbar/navbar.template.html',
    controller: ['$scope', 'CONFIG',
      function NavbarCtrl($scope, CONFIG) {
        this.homeButton = {
          link: '/',
          title: CONFIG.appName,
        };
      }
    ]
  });
