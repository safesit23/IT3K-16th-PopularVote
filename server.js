var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 9000

io.on('connection', function (socket) {
  console.log('connect')
  socket.on('changePath', (pathName) => {
    console.log('Path User : ', pathName);
    io.sockets.emit('pathName', pathName);
    io.sockets.emit('pathNameResult', pathName);
  });
  socket.on('projectorPath', (pathNameProj) => {
    console.log('Path Projector : ',pathNameProj);
    io.sockets.emit('pathProjector',pathNameProj);
  })
});


http.listen(port, function () {
  console.log('listen port :' + port)
});