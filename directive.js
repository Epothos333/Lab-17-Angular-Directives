var app = angular.module('directivesModule');

app.directive('firstDirective', ['storageService', function(storageService) {
	return {
		restrict: 'EA',
		replace: false,
		template: '<h1>hOLLAAA</h1>'
	}
}]);