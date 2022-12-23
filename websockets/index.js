const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('new client connected');
  socket.on('chat message', msg => {
    console.log('message received on server = ', msg)
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`server running at port = ${port}`);
});
