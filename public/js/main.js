angular.module('app',['ngRoute'])
	.config(function($routeProvider){


		$routeProvider.when('/', {
			templateUrl: 'partials/home.html'
			//,controller:'HomeController'
		});


		$routeProvider.otherwise({redirectTo:'/'})

})