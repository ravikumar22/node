var Emitter = require('events');
var utils = require('util');

function greeter() {
    this.greeting = 'Hello World!';
}

// inherits actually create a virtual prototype
utils.inherits(greeter, Emitter);

greeter.prototype.greet = function(someone) {
    console.log(this.greeting + ': '+ someone);
    // this.emit('greet', someone);
}

var greeter1 = new greeter();

greeter1.on('greet', function(someone){
    console.log('greet called : '+someone);
});

greeter1.greet('Ravi');
greeter1.emit('greet', 'Ravi');
