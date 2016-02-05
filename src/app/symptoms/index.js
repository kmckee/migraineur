angular.module('starter')

.controller('SymptomsCtrl', function($scope, symptomRepository, $ionicModal) {

    $ionicModal.fromTemplateUrl('/app/symptoms/add.html', {scope: $scope, animation: 'slide-in-up'})
    .then(function(modal) {
        $scope.addModal = modal;
    });

    $scope.remove = function(symptom) {
        symptomRepository
            .remove(symptom)
            .then(function() {
                var symptoms = $scope.symptoms;
                symptoms.splice(symptoms.indexOf(symptom), 1);
            })
            .catch(console.log);
    };

    $scope.update = function() {
        return symptomRepository.all().then(function(symptoms) {
            $scope.symptoms = symptoms;
        });
    };
    $scope.update();

});
