var buster = require('buster');
var sinon = require('sinon');
var printer = require('../lib/printer');

buster.testCase("Printer", {
    setUp: function() {
        sinon.spy(console, "log");
    },

    tearDown: function() {
        console.log.restore();
    },

    "calls console log with message": function() {
        printer.print("message");
        assert.match(console.log.firstCall.args[0], /message/);
    }

});

