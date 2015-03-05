var app = angular.module('parseQ');

app.service('parseService', function($http) {



    this.POST = function(question) {
        return $http.post('https://api.parse.com/1/classes/Questions', {
            'question': question
        });


    };



});
