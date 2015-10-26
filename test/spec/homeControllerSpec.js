describe("homeController", function(){


		var $scope;


		beforeEach(function(){
			module('mrswift')
			inject(function($injector){
				$scope = $injector.get('$rootScope').$new();
			});
		});



	it('Must create a Contact Empty When no parameter route to Past',
		inject(function($controller){

			$controller('homeController',{"$scope":$scope})
			expect($scope.contact._id).toBeUndefined();
  }));

	it('Must create a Contact When parameter route to Past',
		inject(function($controller){

			$controller('homeController',{
				'$routeParams':{contactId:1},
				'$scope':$scope
				})
			expect($scope.contact._id).toBeUndefined();
	}));


});
