/// <reference path="../../../typings/browser.d.ts" />
'use strict';

require('angular/angular.js');

class Print {
	
	message: string;
	
	constructor(content: string) {
		this.message = `Printing ${content}`;
	}
	
	print() {
		return this.message;
	}
}

angular.module('App', []).controller('Ctrl', [
	'$log',
	'$window',
	'$location',
	'$scope',
	'$timeout',
	function ($log, $window, $location, $scope, $timeout) {
		this.print = new Print('test');
	}
]);