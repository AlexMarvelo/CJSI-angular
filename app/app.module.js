'use strict';
require('angular');

// Import styles
require('./theme/css/bootstrap.min.css');
require('./theme/css/heroic-features.css');

// Import utils
require('./utils/findAncestor');
require('./utils/indexOfByProp');

// Import modules
require('./core/core.module');
require('./components/navbar/navbar.module');
require('./components/movies-block/movies-block.module');

// Declare app level module which depends on views, and components
angular.module('OMDbHero', [
  require('angular-route'),
  'core',
  'navbar',
  'moviesBlock'
]);

require('./app.config');

angular.bootstrap(document, ['OMDbHero']);
