var app = angular.module('directivesModule', []);



app.controller('emptyController',['$scope', 'getReddit', 'storageService', function($scope, getReddit, storageService) {
	var arrOfStuff = [];
	var Stuff = function(title, img, desc) {
		this.titles = title;
		this.img = img;
		this.desc = desc;
	}
	var theTitle, theImage, theDesc;
		getReddit.then(function(response){
			for (var i = 0; i < 9; i++) {
				theTitle = response.data.data.children[i].data.title;
				theImage = response.data.data.children[i].data.thumbnail;
				theDesc = response.data.data.children[i].data.author;


				var addThis = new Stuff(theTitle, theImage, theDesc);
				arrOfStuff.push(addThis);
						}
		});	
		storageService.getData(arrOfStuff);
	}]);

