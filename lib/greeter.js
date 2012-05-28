var printer = require('./printer')

var greeter = {
    greet: function() {
        printer.print("Hello, world!");
    }
}
module.exports = greeter
