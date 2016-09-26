'use strict';
require('angular');

// Import styles
require('./theme/css/bootstrap.min.css');
require('./theme/css/heroic-features.css');

// Import components
require('./components/navbar/navbar.module.js');
require('./components/navbar/navbar.component.js');

// Declare app level module which depends on views, and components
angular.module('OMDbHero', [
  'navbar'
])

.config([() => {
  //asd
}]);

angular.bootstrap(document, ['OMDbHero']);
