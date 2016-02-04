angular.module('starter')

.controller('AddSymptomCtrl', function($scope, RATINGS, symptomRepository) {
    $scope.ratings = RATINGS;
    $scope.model = {rating: null, comments: ''};
    $scope.save = function() {
        symptomRepository
            .save($scope.model)
            .then(function() { $scope.addModal.hide(); $scope.update(); })
            .catch(console.log);
    };
    $scope.cancel = function() {
        $scope.addModal.hide();
    };
    $scope.selectRating = function(rating) {
        $scope.model.rating = rating.val;
    };
});
