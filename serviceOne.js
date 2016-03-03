var app = angular.module('directivesModule');

app.factory('storageService', function() {
	var redditData;

	return {
		getData: function(data) {
			redditData = data;
		},
		retrieveData: function() {
			return redditData;
		}
	}
});