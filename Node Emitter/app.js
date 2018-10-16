var emitter = require('events');

var emtr = new emitter();

emtr.on('greet', function(){
    console.log('something happened');
})


emtr.on('greet', function() {
    console.log('A greeting occurred!');
})

console.log('Hello!');
emtr.emit('greet');