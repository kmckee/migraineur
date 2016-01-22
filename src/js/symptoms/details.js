angular.module('starter')

.controller('SymptomDetailCtrl', function($scope, $stateParams, Symptoms) {
    $scope.symptom = Symptoms.get($stateParams.symptomId);
});
