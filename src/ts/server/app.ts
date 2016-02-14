/// <reference path="../../../typings/main.d.ts" />
'use strict';

const port = 3000;

const express = require('express');

const app = express();

app.use(express.static('pub')).listen(port, () => {
	console.log(`Listening on port ${port}`);
});