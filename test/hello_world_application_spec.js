/**
* Test HelloWorldApplication
*/

define(function(require) {

  var HelloWorldApplication = require('hello_world_application');

  describe('HelloWorldApplication', function() {

    beforeEach(function() {
      this.hello_world_application = new HelloWorldApplication();
    });

    afterEach(function() {
      // this needs to happen because of testing purpose only
      // https://github.com/documentcloud/backbone/commit/96a7274cf746b3aba6ca0b13866d5d5293c3ad82
      try {
        Backbone.history.stop();
      }
      catch(e) {
        console.log(e);
      }
    })


    it('should have a title, as a string', function() {
      expect(this.hello_world_application.title).to.be;
      expect(this.hello_world_application.title).to.be.a('string');
    });

    describe('@initialize', function() {

    it('should be defined', function() {
      expect(this.hello_world_application.initialize).to.be.an('function');
    });

    it('should call super', function() {
      var spy = sinon.spy(this.hello_world_application.__proto__.constructor.__super__, "initialize");
      this.hello_world_application.initialize();
      expect(spy.calledOnce).to.be.true;
    });

    it('should call @initLayout', function() {
      var spy = sinon.spy(this.hello_world_application, "initLayout");
      this.hello_world_application.initialize();
      expect(spy.calledOnce).to.be.true;
    });

    it('should call @initControllers', function() {
      var spy = sinon.spy(this.hello_world_application, "initControllers");
      this.hello_world_application.initialize();
      expect(spy.calledOnce).to.be.true;
    });
  });


  describe('@initLayout', function() {

    beforeEach(function() {
      this.hello_world_application.application_layout = null;
    });

    it('application_layout should be null', function() {
      expect(this.hello_world_application.application_layout).to.be.null;
    });

  });


  describe('@initControllers', function() {

  });
  });
});