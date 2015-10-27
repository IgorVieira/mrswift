angular.module('components',[])
  .directive('contactForm', function(){

    return{
      restrict:"EA",
      scope:true,
      templateUrl:'js/directives/pieces/home/contactForm.html'
    }

  })

  .directive('painelTime', function(){
    return{
      restrict:'EA',
      scope:true,
      templateUrl:'js/directives/pieces/home/painelTime.html'
    }
  })
