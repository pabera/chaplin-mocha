# Test HelloWorldApplication

define [
  'chaplin'
  'hello_world_application'
], (Chaplin, HelloWorldApplication) ->
  'use strict'

  describe 'HelloWorldApplication', ->

    beforeEach ->
      @hello_world_application = new HelloWorldApplication()

    afterEach ->
      # this needs to happen because of testing purpose only
      # https://github.com/documentcloud/backbone/commit/96a7274cf746b3aba6ca0b13866d5d5293c3ad82
      try
        Backbone.history.stop()
      catch e
        console.log(e)


    it 'should have a title, as a string', ->
      expect(@hello_world_application.title).to.be
      expect(@hello_world_application.title).to.be.a('string')

    describe '@initialize', ->

      it 'should be defined', ->
        expect(@hello_world_application.initialize).to.be.an('function')

    it 'should call super', ->
      spy = sinon.spy(@hello_world_application.__proto__.constructor.__super__, "initialize")
      @hello_world_application.initialize()
      expect(spy.calledOnce).to.be.true

    it 'should call @initLayout', ->
      spy = sinon.spy(@hello_world_application, "initLayout")
      @hello_world_application.initialize()
      expect(spy.calledOnce).to.be.true

    it 'should call @initControllers', ->
      spy = sinon.spy(@hello_world_application, "initControllers")
      @hello_world_application.initialize()
      expect(spy.calledOnce).to.be.true


  describe '@initLayout', ->

    beforeEach ->
      @hello_world_application.layout = null

    it 'application_layout should be null', ->
      expect(@hello_world_application.layout).to.be.null