'use strict';

angular.
  module('navbar').
  component('navbar', {
    templateUrl: 'components/navbar/navbar.template.html',
    controller: [
      function NavbarController() {
        // var self = this;
        //
        // $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
        //   self.phone = response.data;
        // });
      }
    ]
  });
