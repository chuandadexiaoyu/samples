EE = require('events').EventEmitter;
ee = new EE();

die = false;

ee.on('die', function() {
  die = true;
});

setTimeout(function() {
  ee.emit('die');
}, 100);

while(!die) {
  console.log("XXXXXXXXXXXXXXXXX");
  setTimeout(function() {
    console.log("I am in loop!!!");
  }, 3000);
}

console.log('done');
