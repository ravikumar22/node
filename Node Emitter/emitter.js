function emitter() {
    this.events = {};
}

// listner is a function whenever an event happens 
emitter.prototype.on = function(type, listner) {
    console.log(type);
    this.events[type] = this.events[type] || [];
    this.events[type].push(listner);
    console.log(this.events);
}

emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listner) {
            listner();
        });
    }
}

module.exports = emitter;