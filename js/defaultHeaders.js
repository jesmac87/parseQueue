var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function() {
    return {
        request: function(config) {
            config.headers = {
                'X-Parse-Application-Id': 'lAonVxstnrJNUCKLk4zrd5TNinLFpkehVztQFyKw',
                'X-Parse-REST-API-Key': '6eZz8wPbjBhQvJlTe2eBkcZpOXXMApvPH4XGLmLA'
            };
            return config;
        }
    };
});
