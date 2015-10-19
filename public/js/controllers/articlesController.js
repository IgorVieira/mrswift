'use strict'

angular.module('mrswift').controller('articlesController',
   function(Article, $scope){
 		
   	$scope.articles = [];


   	

      function searchArticles(){
         Article.query(
            function(articles){
               $scope.articles = articles;
            },
            function(error){
               console.log('Deu ruim :/')
               console.log(error)
            }
         )
      }


      searchArticles();
 })
