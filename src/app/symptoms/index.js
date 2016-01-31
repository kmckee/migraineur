angular.module('starter')

.controller('SymptomsCtrl', function($scope, symptomRepository, $ionicModal) {
    symptomRepository.all().then(function(symptoms) {
        $scope.symptoms = symptoms;
    });

    $ionicModal.fromTemplateUrl('/app/symptoms/add.html', {scope: $scope, animation: 'slide-in-up'})
    .then(function(modal) {
        $scope.addModal = modal;
    });

    $scope.remove = function(symptom) {
        // Symptoms.remove(symptom);
    };
});
