angular.module('myapp').factory('Lock', ['$resource', function($resource) {
    return $resource('/api/locks/:slug', {slug: '@slug'},
        {
            'list': {method: 'GET', isArray: true},
            'update': { method:'PUT' }
        });
    }
]);