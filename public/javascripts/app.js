(function() {
	var app = angular.module('MyPortfolio', [ 'ui.router']);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('photos', {
	      url: '/photos',
	      templateUrl: '_photoView.html',
	    })
	    .state('about', {
	      url: '/about',
	      templateUrl: '_aboutView.html',
	    }).state('projects', {
	      url: '/projects',
	      templateUrl: '_projectView.html',
	    })
	    .state('contact', {
	      url: '/contact',
	      templateUrl: '_contactView.html',
	    });





	});


	
})();

