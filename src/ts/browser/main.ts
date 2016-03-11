/// <reference path="../../../typings/browser.d.ts" />
'use strict';

require("!style!css!sass!../../sass/style.scss");

document.addEventListener("DOMContentLoaded", () => {
	const h1 = document.createElement('h1');
	h1.textContent = 'Webpack Express';
	document.body.appendChild(h1);
});