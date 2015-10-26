describe("homeController", function(){


		var $scope;


		beforeEach(function(){
			module('mrswift')
			inject(function($injector){
				$scope = $injector.get('$rootScope').$new();
			});
		});



	it('Deve criar um contato vazio quando nenhum parametro de rota for passado',
		inject(function($controller){

			$controller('homeController',{"$scope":$scope})
			expect($scope.contact._id).toBeUndefined();
  }))
})
