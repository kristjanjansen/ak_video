var fs = require('fs');
var path = require('path');

var midi = require('midi');

var express = require('express')
var app = new express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server);

var port = 8000

app.use(express.static(path.join(__dirname, 'client')))
server.listen(port)

var input = new midi.input();
input.openPort(0);

io.sockets.on('connection', function (socket) {
  
  input.on('message', function(deltaTime, message) {
    socket.emit('message', { key: message[1], vol: message[2]});
    console.log(message)
  });

})
