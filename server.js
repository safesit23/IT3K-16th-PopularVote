const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 9000
let countLoginPage = 0; 
let countSelectPage = 0; 
let countPageWait = 0;
let countPageVote = 0;
let countPageResult = 0;



const login = io.of('/')
login.on('connection', function(socket){
  socket.on('countLogin',(count) => {
    countLoginPage = countLoginPage + count
    console.log('Login Page : ',countLoginPage)
    io.emit('getCountLogin',countLoginPage)
  })
});

const select = io.of('/select');
select.on('connection', function(socket){
  socket.on('countSelect',(count) => {
    countSelectPage = countSelectPage + count
    console.log('Select Page : ',countSelectPage)
    io.emit('getCountSelect',countSelectPage)
  })
});

const wait = io.of('/waiting')
wait.on('connection', function(socket){
    socket.on('countWait',(count) => {
    countPageWait = countPageWait + count
    console.log('Wait Page : ',countPageWait)
    io.emit('getCountWait',countPageWait)
  })
});

const vote = io.of('/playvoting')
vote.on('connection', function(socket){
  socket.on('countPageVote',(count) => {
    countPageVote = countPageVote + count
    console.log('Vote Page : ',countPageVote)
    io.emit('getCountPageVote',countPageVote)
  })
});

const result = io.of('/result')
result.on('connection', function(socket){
  socket.on('countPageResult',(count) => {
    countPageResult = countPageResult + count
    console.log('Result Page : ',countPageResult)
    io.emit('getCountPageResult',countPageResult)
  })
});

io.on('connection', function (socket) {
  socket.on('changePath', (pathName) => {
    console.log('Path User : ', pathName);
    io.sockets.emit('pathName', pathName);
    io.sockets.emit('pathNameResult', pathName);
  });
  socket.on('projectorPath',async (pathNameProj) => {
    if (pathNameProj==='resultprojector') {
      socket.on('scoreResult', async (score)=>{
         io.sockets.emit('pathProjector', pathNameProj);
         io.sockets.emit('scoreCompetion',score)
      console.log('Path Projector : ', pathNameProj);
      })
     }else{
      console.log('Path Projector : ', pathNameProj);
      io.sockets.emit('pathProjector', pathNameProj);
     }
    
  })
  socket.on('getRound', (round) => {
    console.log('Round : ', round)
    io.sockets.emit('round', round);
  })
});

http.listen(port, function () {
  console.log('listen port :' + port)
});