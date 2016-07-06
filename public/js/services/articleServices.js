'use strict'

angular.module('mrswift').factory('Article', function($resource) {

        return $resource('/articles/:id');
});
