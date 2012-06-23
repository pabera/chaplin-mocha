define(
  function(require) {

    var View = require('views/base/view');

    describe('Views/Base/View', function() {
      beforeEach(function() {
        this.view = new View();
      });

      describe('@getTemplateFunction', function() {
        it('should have a getTemplateFunction as function', function() {
          expect(this.view.getTemplateFunction).to.be.a('function');
        });
      });


      describe('@initialize', function() {
        it('should have a initialize as function', function() {
          expect(this.view.initialize).to.be.a('function');
        });
      });

      
    });
  }
  );