var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 9000

io.on('connection', function (socket) {
  console.log('connect')
  socket.on('changePath', (pathName) => {
    console.log('path ', pathName);
    io.sockets.emit('pathName', pathName);
    io.sockets.emit('pathNameResult', pathName);
  });
  socket.on('addminstopTime', () => {
    console.log('stop')
    io.sockets.emit('stoptime')
  })
});


http.listen(port, function () {
  console.log('listen port :' + port)
});