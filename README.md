chaplin-mocha
=============

Boilerplate for a Chaplin/Backbone test environment using Mocha, Chai and Sinon

This test environment is ment to work the the Chaplin-Boilerplate as its source. It is written in Coffeescript. I added some really basic tests for the HelloWorldApplication-Example. It is using requirejs 2 and is fully AMD compatible.

### Requirements
To run the test, you need to install some node-plugins such es `mocha`, `requirejs`, `express` and `should` (some of them are dependencies). Then go to your browser and and hit `test/index.html`. I am currently working on doing this stuff headless too, so stay tuned :)

### Todo
* Headless testing
* Integration in [chaplin-generators](https://github.com/pabera/chaplin-generators)