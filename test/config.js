
console = window.console || function() {};

require.config({
  // the baseUrl is the URL of your application to be tested, not the test directory
  // I require the exact same files for my test environment that I use for development and production
  // This way you have some really dirty pathnames later on, but this is setup only - you're not touching this file very often
  // instead the requires in the spec files itself are really clean!
  baseUrl: '../src/js/', 
  paths: {
    'jquery'        : 'vendor/jquery-1.7.2',
    'underscore'    : 'vendor/underscore-1.3.3',
    'backbone'      : 'vendor/backbone-0.9.2',
    'text'          : 'vendor/require-text-2.0.0',
    'handlebars'    : 'vendor/handlebars-1.0.0.beta.6',
    'chaplin'       : 'vendor/chaplin'
  },
  // Shims: let underscore and jquery be ready for Backbone
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  },
  // Reload everytime the files are saved (LiveReload, Codekit etc.)
  urlArgs:'uncache=' + (new Date()).getTime()
});

// Setup the Test-Environment and load it
require([
  // Test supporters, 
  'require', 
  '../../test/support/chai', 
  '../../test/support/sinon', 
  '../../node_modules/mocha/mocha.js'], 
  function(require, chai, sinon) {
  
  // make them global
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  // some mocha setup
  mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

  // List all your testfiles here in this require listing
  require([
    '../../test/js/hello_world_application_spec'
  ], function() {
    // Run Mocha after loading evering successfully
    mocha.run()
  }); 
});