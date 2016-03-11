/// <reference path="../../../typings/main.d.ts" />
'use strict';

import express = require('express');
import http = require('http');

const port = 8080;

const app = express();

app
.use(require('connect-livereload')({
	port: 5000
}))
.use(express.static('pub'));

const httpServer = (<any>http).Server(app);

httpServer.listen(port, () => {
	console.log(`Listening on port ${port}`);
});