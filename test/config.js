
console = window.console || function() {};

require.config({
    // Base URL relative to the test runner
    // Paths are relative to this
    baseUrl: '../src/js/',
    paths: {
        // Testing libs
        'jquery'        : 'vendor/jquery-1.7.2',
        'underscore'    : 'vendor/underscore-1.3.3',
        'backbone'      : 'vendor/backbone-0.9.2',
        'text'          : 'vendor/require-text-2.0.0',
        'handlebars'    : 'vendor/handlebars-1.0.0.beta.6',
        'chaplin'       : 'vendor/chaplin'
      },
      shim: {
        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },
        underscore: {
          exports: '_'
        }
      },
      urlArgs:'uncache=' + (new Date()).getTime()
    });

require(['require', '../../test/support/chai', '../../test/support/sinon', '../../node_modules/mocha/mocha.js'], function(require, chai, sinon) {
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

 require([
    '../../test/js/hello_world_application_spec'
  ], function() {
     mocha.run()
  }); 
});