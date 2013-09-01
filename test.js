var midi = require('midi');

var input = new midi.input();

console.log(process.argv)

console.log('Midi inputs:')

for (i = 0; i < input.getPortCount() ; i++) {
  console.log(i, input.getPortName(i));
}
