angular.module('mrswift').factory('Contact', function($resource) {

	return $resource('/contact/:id');
});
