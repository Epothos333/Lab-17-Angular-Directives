app = angular.module('directivesModule');

app.factory('getReddit', ['$http', function($http) {
	return $http.get('https://www.reddit.com/.json');

}]);