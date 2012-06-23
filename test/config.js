require.config({
    // Base URL relative to the test runner
    // Paths are relative to this
    baseUrl: '../src/js/',
    paths: {
        // Testing libs
        'chai'        	: '../../test/support/chai',
        'common'        : '../test/common',
        'jquery'        : 'vendor/jquery',
        'underscore'    : 'vendor/underscore',
        'backbone'      : 'vendor/backbone',
        'text'          : 'vendor/require-text',
        'handlebars'    : 'vendor/handlebars',
        'highcharts'    : 'vendor/highcharts',
        'bootstrap'     : 'vendor/bootstrap',
        'chaplin'       : 'vendor/chaplin'
      },
      shim: {
        underscore: {
          attach: '_'
        },
        backbone: {
          deps: ['underscore', 'jquery'],
          attach: function(_, $) {
            console.log(Backbone);
            return Backbone;
          }
      	},
      	mocha: {
      		attach: 'mocha'
      	}
      },
      priority: [
      'jquery',
      'underscore',
      'common'
      ]
    });

mocha.setup({
	ui: 'bdd',
	ignoreLeaks: true
});

console = window.console || function() {};

var runMocha = function() {
	mocha.run();
};

var testsuites = function() {
 require([
      '../../test/hello_world_application_spec',
    ], runMocha); 
};

setTimeout(testsuites, 1000);
