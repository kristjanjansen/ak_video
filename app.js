var fs = require('fs');

var tako = require('tako')
var app = tako()

app.route('/').file(__dirname + '/client/index.html');
app.route('/*').files(__dirname + '/client');

app.httpServer.listen(8000)

app.sockets.on('connection', function (socket) {
  setTimeout(function() {
    app.sockets.emit('message', { position: 0});
  }, 10000)

})
