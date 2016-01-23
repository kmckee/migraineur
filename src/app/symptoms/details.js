angular.module('starter')

.controller('SymptomDetailCtrl', function($scope, $stateParams, symptomRepository) {
    $scope.symptom = symptomRepository.get($stateParams.symptomId);
});
