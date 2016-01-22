angular.module('starter')

.controller('SymptomsCtrl', function($scope, Symptoms) {
    $scope.symptoms = Symptoms.all();
    $scope.remove = function(symptom) {
        Symptoms.remove(symptom);
    };
    $scope.add = function() {
        alert('todo!');
    };
});
