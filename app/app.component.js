'use strict';

angular.
  module('OMDbHero').
  component('OMDbHero', {
    controller: [
      function OMDbHeroCtrl() {
        this.favourites = localStorageService.get('favourites');
        if (!this.favourites) this.favourites = [];
      }
    ]
  });
