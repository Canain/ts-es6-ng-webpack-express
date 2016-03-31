/// <reference path="../../../typings/browser.d.ts" />
'use strict';

require("!style!css!sass!../../sass/style.scss");

import TextCompressor from './compressor';
const lzma = require('lzma-purejs');
const socketio: SocketIOClientStatic = require('socket.io-client');

document.addEventListener("DOMContentLoaded", () => {
	const h1 = document.createElement('h1');
	h1.textContent = 'Webpack Express';
	document.body.appendChild(h1);
	const socket = socketio();
	const compressor = new TextCompressor(lzma);
	socket.on('hello', (data: string) => {
		const compressed = compressor.compress(data);
		console.log(data + ' - ' + compressed + ' - ' + compressor.decompress(compressed));
	});
});