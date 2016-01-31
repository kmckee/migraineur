describe('AddSymptomCtrl', function() {
    var createController, $scope, RATINGS, symptomRepository;
    beforeEach(module('starter'));
    beforeEach(module('templates'));
    beforeEach(inject(function($controller, $rootScope, _RATINGS_, $q) {
        RATINGS = _RATINGS_;
        $scope = $rootScope.$new();
        $scope.addModal = {hide: sinon.stub()};
        symptomRepository = {save: sinon.stub().returns($q.when())};
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
        expect($scope.ratings).to.eql(RATINGS);
    });
    it("sets the symptom's rating value", function() {
        createController();
        $scope.selectRating(RATINGS[0]);
        expect($scope.model.rating).to.eql(1);
    });
    it('closes the dialog when saved', function() {
        createController();
        $scope.save();
        $scope.$digest();
        expect($scope.addModal.hide).to.have.been.called;
    });
    it('saves the model when saved', function() {
        createController();
        $scope.save();
        expect(symptomRepository.save).to.have.been.calledWith($scope.model);
    });
    it('closes the dialog when cancelled', function() {
        createController();
        $scope.cancel();
        expect($scope.addModal.hide).to.have.been.called;
    });
    it('does not save when cancelled', function() {
        createController();
        $scope.cancel();
        expect(symptomRepository.save).not.to.have.been.called;
    });
});
