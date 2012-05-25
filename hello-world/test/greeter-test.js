var buster = require('buster');
var sinon = require('sinon');
var greeter = require('../lib/greeter');

buster.testCase("Greeter", {
    setUp: function() {
        sinon.spy(console, "log");
    },

    tearDown: function() {
        console.log.restore();
    },

    "calls console log with hello": function() {
        greeter.greet();
        assert.match(console.log.firstCall.args[0], /Hello/);
    }

});

