var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService) {


    $scope.postData = function() {
        parseService.POST($scope.questionText).then(function(response) {
            console.log(response.data);
        });

        // $scope.questionText(); // reset question input text box
    };
});
