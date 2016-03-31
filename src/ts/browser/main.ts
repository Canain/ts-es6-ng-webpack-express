/// <reference path="../../../typings/browser.d.ts" />
'use strict';

require("!style!css!sass!../../sass/style.scss");

import TextCompressor from './compressor';
const socketio: SocketIOClientStatic = require('socket.io-client');

window['TextCompressor'] = TextCompressor;

document.addEventListener("DOMContentLoaded", () => {
	const h1 = document.createElement('h1');
	h1.textContent = 'Webpack Express';
	document.body.appendChild(h1);
	const socket = socketio();
	socket.on('up', (data: string) => {
		console.log(data);
	});
});