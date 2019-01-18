var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 9000

io.on('connection', function (socket) {

  console.log('connect')
  socket.on('setTime', (time) => {
    console.log('client is subscribing to timer with interval ', time);
    io.sockets.emit('time', time);
  });
  socket.on('addminstopTime', () => {
    console.log('stop')
    io.sockets.emit('stoptime')
  })
});


http.listen(port, function () {
  console.log('listen port :' + port)
});