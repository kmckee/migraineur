angular.module('starter')

.controller('FactDetailCtrl', function($scope, $stateParams, Facts) {
    $scope.fact = Facts.get($stateParams.factId);
});
