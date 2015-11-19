(function(){
	var app = angular.module('MyPortfolio');

	app.controller('headerController', function(){
		this.title = "Natalie Martell Web Developer";
		console.log(this.title)
		return this;
		console.log("thistitle");
	});	
})();