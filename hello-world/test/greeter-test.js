var buster = require('buster');
var sinon = require('sinon');
var helloWorld = require('../lib/greeter');

buster.testCase("Greeter", {
    setUp: function() {
        sinon.spy(console, "log");
    },

    tearDown: function() {
        console.log.restore();
    },

    "calls console log with hello": function() {
        helloWorld.greeter.greet();
        assert.match(console.log.firstCall.args[0], /Hello/);
    }

});

