(function(){
	var app = angular.module('MyPortfolio');
	app.directive('photos',function(){
		return{
			restrict: 'E',
			templateUrl: '_photoView.html'
		};
	});
})();

