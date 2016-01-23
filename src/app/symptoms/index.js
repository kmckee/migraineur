angular.module('starter')

.controller('SymptomsCtrl', function($scope, Symptoms) {
    Symptoms.all().then(function(symptoms) {
        $scope.symptoms = symptoms;
    });

    $scope.remove = function(symptom) {
        // Symptoms.remove(symptom);
    };
    $scope.add = function() {
        // alert('todo!');
    };
});
