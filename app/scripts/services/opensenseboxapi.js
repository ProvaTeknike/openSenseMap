'use strict';

/**
 * @ngdoc service
 * @name openSenseMapApp.OpenSenseBoxAPI
 * @description Defines the settings for the OpenSenseBox API such as the URL
 * # OpenSenseBox
 * Factory in the openSenseMapApp.
 */
angular.module('openSenseMapApp')
	.factory('OpenSenseBoxAPI', function ($resource) {
		var api = {
			url: 'https://api.opensensemap.org'
		};
		return api;
	});
