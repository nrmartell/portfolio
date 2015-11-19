(function(){
	var app = angular.module('MyPortfolio');

	app.controller('headerController', function(){
		this.title = "*Natalie Martell Web Developer";
		console.log(this.title)
		return this;
		console.log("thistitle");
	});	
})();

// app.directive('backImg', function(){
//     return function(scope, element, attrs){
//         attrs.$observe('backImg', function(value) {
//             element.css({
//                 'background-image': 'url('/images/AdobeStock_54572760.gif')',
//                 'background-size' : 'cover'
//             });
//         });
//     };
// });