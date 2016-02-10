(function() {
	var app = angular.module('MyPortfolio',[ 'ui.router'] );

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('photos', {
	      url: '/photos',
	      templateUrl: '_photoView.html',
	    })

	     .state('home', {
	      url: '/',
	      templateUrl: '_homeView.html',
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


