var events = require("events");

var emitter = new events.EventEmitter();

emitter.addListener('request', function(thing) {
		console.log('I am in listener ---------------' + thing);
		});

emitter.emit('request', 'req1');
emitter.emit('request', 'req2');
emitter.emit('request', 'req3');
emitter.emit('request', 'req4');
emitter.emit('request', 'req5');
emitter.emit('request', 'req6');
emitter.emit('request', 'req7');
emitter.emit('request', 'req8');
