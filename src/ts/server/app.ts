/// <reference path="../../../typings/main.d.ts" />
'use strict';

const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port = 8080;

const app = express();

app
.use(require('connect-livereload')({
	port: 5000
}))
.use(express.static('pub'));

const httpServer = http.Server(app);

const server: SocketIO.Server = socketio(httpServer);

server.on('connection', (socket) => {
	console.log(socket);
});

httpServer.listen(port, () => {
	console.log(`Listening on port ${port}`);
});