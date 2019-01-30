const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 9000
let count = 0;
// count += 1;
let countLoginPage = 0; 
let countSelectPage = 0; 
let countPageWait = 0;
let countPageVote = 0;
let countPageResult = 0;

io.on('connection', function (socket) {
  count++
  socket.emit('countUser', count)
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
    console.log('Round : ', round)
    io.sockets.emit('round', round);
  })

  socket.on('countLogin',(count) => {
    countLoginPage = countLoginPage + count
    console.log('Login Page : ',countLoginPage)
    io.emit('getCountLogin',countLoginPage)
  })

  socket.on('countSelect',(count) => {
    countSelectPage = countSelectPage + count
    console.log('Select Page : ',countSelectPage)
    io.emit('getCountSelect',countSelectPage)
  })

  socket.on('countWait',(count) => {
    countPageWait = countPageWait + count
    console.log('Wait Page : ',countPageWait)
    io.emit('getCountWait',countPageWait)
  })

  socket.on('countPageVote',(count) => {
    countPageVote = countPageVote + count
    console.log('Vote Page : ',countPageVote)
    io.emit('getCountPageVote',countPageVote)
  })

  socket.on('countPageResult',(count) => {
    countPageResult = countPageResult + count
    console.log('Result Page : ',countPageResult)
    io.emit('getCountPageResult',countPageResult)
  })

});


http.listen(port, function () {
  console.log('listen port :' + port)
});