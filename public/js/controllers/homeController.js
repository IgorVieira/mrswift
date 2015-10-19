angular.module('mrswift').controller('homeController',
	function($scope, Contact, $routeParams) {

		if($routeParams.userId) {
			User.get({id: $routeParams.userId},
				function(contact) {
					$scope.user = user;
				},
				function(error) {
					$scope.msg = {
					  text: 'Error! :/.'
					};
				}
			);
		} else {
			$scope.contact = new Contact();
		}

		$scope.saveContact = function() {
		  $scope.contact.$save()
		  	.then(function() {
		  		$scope.msg = {text: 'Recebemos sua mensgem =]'};
		  		$scope.contact = new Contact();
		  	})
		  	.catch(function(erro) {
		  		$scope.msg = {text: 'You fail in this page! '};
		  	});
		};


});
