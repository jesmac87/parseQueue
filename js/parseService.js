var app = angular.module('parseQ');

app.service('parseService', function($http) {

    this.POST = function(question) {
        return $http.post('https://api.parse.com/1/classes/Questions', {
            'text': question,
            'status': 'Red',
        });
    };

    this.getParseData = function() {
        return $http.get('https://api.parse.com/1/classes/Questions');
    };

    this.updateParseData = function(objectId, status) {
        return $http.put('https://api.parse.com/1/classes/Questions/' + objectId, {
            'status': status,
        });
    };
});
