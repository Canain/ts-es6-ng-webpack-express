'use strict';

require('../css/style.css');

require('core-js');

require('zone.js');
require('reflect-metadata');

import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, enableProdMode } from '@angular/core';

// document.addEventListener('DOMContentLoaded', () => {
// 	const h1 = document.createElement('h1');
// 	h1.textContent = 'Hello';
// 	document.body.appendChild(h1);
// });

@Component({
	selector: 'webpack-express',
	template: `
		<h1>Hello</h1>
	`
})
export class WebpackExpress {
	
}

// enableProdMode();
bootstrap(WebpackExpress);