angular.module('starter')

.controller('AddSymptomCtrl', function($scope, RATINGS, symptomRepository) {
    $scope.ratings = RATINGS;
    $scope.model = {rating: null, comments: ''};
    $scope.save = function() {
        symptomRepository
            .save($scope.model)
            .then(hideModal)
            .catch(console.log);
    };
    $scope.cancel = hideModal;
    $scope.selectRating = function(rating) {
        $scope.model.rating = rating.val;
    };

    function hideModal() {
        $scope.addModal.hide();
    }
});
