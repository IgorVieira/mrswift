'use strict'

angular.module('mrswift').controller('articleController',
	function($scope, $routeParams, Article){


			function loadArticles(){
				Article.get({id:$routeParams.articleId},
					function(article){
						$scope.article = article;
					},
					function(erro){
						console.log('Deu ruim :/');
						console.log(erro);
					}
				);	
			}


			loadArticles();

			

})