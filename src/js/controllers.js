angular.module('starter.controllers', [])

.controller('AnalysisCtrl', function($scope) {})

.controller('SymptomsCtrl', function($scope, Symptoms) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.symptoms = Symptoms.all();
    $scope.remove = function(symptom) {
        Symptoms.remove(symptom);
    };
    $scope.add = function() {
        alert('todo!');
    }
})

.controller('SymptomDetailCtrl', function($scope, $stateParams, Symptoms) {
    $scope.symptom = Symptoms.get($stateParams.symptomId);
})

.controller('FactsCtrl', function($scope, Facts) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.facts = Facts.all();
    $scope.remove = function(fact) {
        Facts.remove(fact);
    };
})

.controller('FactDetailCtrl', function($scope, $stateParams, Facts) {
    $scope.fact = Facts.get($stateParams.factId);
})

.controller('SettingsCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
