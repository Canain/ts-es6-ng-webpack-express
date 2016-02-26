/// <reference path="../../../typings/browser.d.ts" />
'use strict';

require('angular');

require("!style!css!sass!../../sass/style.scss");

class WebpackExpress {

	constructor($log, $window, $location, $scope, $timeout) {
		
	}
}

angular.module('App', []).controller('Ctrl', [
	'$log',
	'$window',
	'$location',
	'$scope',
	'$timeout',
	WebpackExpress
]);