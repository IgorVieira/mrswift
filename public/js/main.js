angular.module('mrswift',['ngRoute', 'ngResource'])
	.config(function($routeProvider){


		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html'
			,controller:'homeController'
		});

		/*
		$routeProvider.when('/articles',{
			templateUrl:'partials/articles.html',
			controller:'articlesController'
		});

		$routeProvider.when('/article/:articleId',{
			templateUrl:'partials/article.html',
			controller:'articleController'
		});
		*/

		$routeProvider.otherwise({redirectTo:'/home'})

})
