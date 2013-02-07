var fs = require('fs');

var tako = require('tako')
var app = tako()

var midi = require('midi');

app.route('/').file(__dirname + '/client/index.html');
app.route('/*').files(__dirname + '/client');

app.httpServer.listen(8000)

var input = new midi.input();

//input.openVirtualPort("Test Input");
input.openPort(1);

app.sockets.on('connection', function (socket) {
  
  input.on('message', function(deltaTime, message) {
    app.sockets.emit('message', { key: message[1], vol: message[2]});
    console.log(message)
  });

})
