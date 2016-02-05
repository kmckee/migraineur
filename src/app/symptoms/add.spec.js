describe('AddSymptomCtrl', function() {
    var createController, $scope, RATINGS, symptomRepository;
    beforeEach(module('starter'));
    beforeEach(module('templates'));
    beforeEach(inject(function($controller, $rootScope, _RATINGS_, $q) {
        RATINGS = _RATINGS_;
        $scope = $rootScope.$new();
        $scope.update = function(){}; // From parent scope.
        $scope.addModal = {hide: jasmine.createSpy('hide')};
        symptomRepository = {save: jasmine.createSpy()};
        symptomRepository.save.and.returnValue($q.when());
        createController = function() {
            $controller('AddSymptomCtrl', {
                $scope: $scope,
                RATINGS: RATINGS,
                symptomRepository: symptomRepository
            });
        };
    }));
    it('has ratings', function() {
        createController();
        expect($scope.ratings).toEqual(RATINGS);
    });
    it("sets the symptom's rating value", function() {
        createController();
        $scope.selectRating(RATINGS[0]);
        expect($scope.model.rating).toEqual(1);
    });
    it('closes the dialog when saved', function() {
        createController();
        $scope.save();
        $scope.$digest();
        expect($scope.addModal.hide).toHaveBeenCalled();
    });
    it('saves the model when saved', function() {
        createController();
        $scope.save();
        expect(symptomRepository.save).toHaveBeenCalledWith($scope.model);
    });
    it('closes the dialog when cancelled', function() {
        createController();
        $scope.cancel();
        expect($scope.addModal.hide).toHaveBeenCalled();
    });
    it('does not save when cancelled', function() {
        createController();
        $scope.cancel();
        expect(symptomRepository.save).not.toHaveBeenCalled();
    });
});
