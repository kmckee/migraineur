angular.module('starter')

.controller('FactsCtrl', function($scope, Facts) {
    $scope.facts = Facts.all();
    $scope.remove = function(fact) {
        Facts.remove(fact);
    };
});
