const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 9000
let count = 0;
// count += 1;

io.on('connection', function (socket) {
  count++
  socket.emit('countUser', count)
  console.log('user Wait connect : ', count)
  socket.on('changePath', (pathName) => {
    console.log('Path User : ', pathName);
    io.sockets.emit('pathName', pathName);
    io.sockets.emit('pathNameResult', pathName);
  });
  socket.on('projectorPath', (pathNameProj) => {
    console.log('Path Projector : ', pathNameProj);
    io.sockets.emit('pathProjector', pathNameProj);
  })
  socket.on('getRound', (round) => {
    console.log('Rund : ', round)
    io.sockets.emit('round', round);
  })
});


http.listen(port, function () {
  console.log('listen port :' + port)
});