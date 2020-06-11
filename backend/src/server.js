const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);

//Instal yarn add socket.io
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id; 
});

mongoose.connect('mongodb+srv://natan:459753459@cluster0-aloxh.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors()); //Permite que todos estejam conectados
app.use(express.json());
app.use(routes);

server.listen(3333); 