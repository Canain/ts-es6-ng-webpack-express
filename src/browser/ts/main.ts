'use strict';

require('../css/style.css');
require('core-js');

document.addEventListener('DOMContentLoaded', () => {
	const h1 = document.createElement('h1');
	h1.textContent = 'Hello';
	document.body.appendChild(h1);
});