var assert = require('assert'),
  sinon = require('sinon'),
  Hello = require('../lib').Hello;

describe('Hello', function() {

  // An example of synchronous testing in Mocha.
  describe('#sayHello', function() {
    
    it('should return the default hello message if no options are provided', function() {
      var hello = new Hello();
      assert.equal('Hello World!', hello.sayHello());
    });

    it('should allow the user to override the helloMessage when instantiating', function() {
      var hello = new Hello({
        helloMessage: '你好世界'
      })
      assert.equal('你好世界', hello.sayHello());
    });

  });

  // An example of asynchronous testing in Mocha.
  describe('#sayHelloLater', function() {

    it('should execute callback with the hello message asynchronously', function(done) {
      var hello = new Hello();
      hello.sayHelloLater(function(helloMessage) {
        assert.equal(helloMessage, 'Hello World!');
        // calling done indicates that all asynchronous
        // aspects of test are complete.
        done();
      });
    });

  });

  // An example of using sinon to spy on function calls.
  describe('#sayHelloThenSayHelloLater', function() {

    it('should invoke both #sayHello and #sayHelloLater', function() {
      var hello = new Hello();
      
      // stub the sayHello and sayHelloLater methods
      // with sinon.
      hello.sayHello = sinon.spy();
      hello.sayHelloLater = sinon.spy();

      hello.sayHelloThenSayHelloLater();

      assert.equal(hello.sayHello.callCount, 1);
      assert.equal(hello.sayHelloLater.callCount, 1);
    })

  });
});