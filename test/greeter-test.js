var buster = require('buster');
var sinon = require('sinon');
var greeter = require('../lib/greeter');
var printer = require('../lib/printer');

buster.testCase("Greeter", {
    setUp: function() {
        sinon.spy(printer, "print");
    },

    tearDown: function() {
        printer.print.restore();
    },

    "calls printer with hello": function() {
        greeter.greet();
        assert.match(printer.print.firstCall.args[0], /Hello/);
    },
    
    "calls printer with world": function() {
        greeter.greet()
        assert.match(printer.print.firstCall.args[0], /world/)
    }

});

