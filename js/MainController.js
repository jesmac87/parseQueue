var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {


    $scope.postData = function() {
        parseService.POST($scope.questionText).then(function(response) {
            $scope.getData();
        });

        $scope.questionText = ''; // reset question input text box
    };

    $scope.getData = function() {
        parseService.getParseData().then(function(response) {
            $scope.questions = response.data.results;
            console.log($scope.questions);
        });
    };

    $scope.getData(); //initial load of question data

    $scope.updateData = function(objectId, status) {

        console.log(status);
        if (status === 'Red') {
            status = 'Yellow';
        } else if (status === 'Yellow') {
            status = 'Red';
        }

        parseService.updateParseData(objectId, status).then(function(response) {
            $scope.getData();
        });
    };
});
