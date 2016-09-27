'use strict';
require('angular');

// Import styles
require('./theme/css/bootstrap.min.css');
require('./theme/css/heroic-features.css');

// Import modules
require('./components/navbar/navbar.module.js');
require('./components/movies-block/movies-block.module.js');
require('./core/core.module.js');

// Declare app level module which depends on views, and components
angular.module('OMDbHero', [
  'navbar',
  'moviesBlock',
  'core'
])

.config([() => {

}]);

angular.bootstrap(document, ['OMDbHero']);
