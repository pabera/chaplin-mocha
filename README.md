chaplin-mocha
=============

Boilerplate for a Chaplin/Backbone test environment using Mocha, Chai and Sinon

This test environment is ment to work the the Chaplin-Boilerplate as its source. It is written in Javascript, not Coffee. I added some really basic tests for the HelloWorldExample.

### Requirements
To run the test, you need to install some node-plugins such es `mocha`, `requirejs`, `express` and `should` (some of them are dependencies). Then go to your browser and and hit `test/index.html`. I am currently working on doing this stuff headless too, so stay tuned :)

### Important Information
*Warning: This currently does not work due to some loading order issues with require.js-2.0.1 and Chaplin - it worked with require.js-1.x.x thought. I am trying to get this fixed soon.*