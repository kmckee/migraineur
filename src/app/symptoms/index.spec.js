describe('SymptomsIndexCtrl', function() {
    var symptomRepository, createController, $scope, $q, $rootScope;
    beforeEach(module('starter'));
    beforeEach(module('templates'));
    beforeEach(inject(function($controller, _$rootScope_, _$q_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        symptomRepository = { all: function() {} };
        createController = function() {
            return $controller('SymptomsCtrl', {
                $scope: $scope,
                symptomRepository: symptomRepository
            });
        };
    }));

    it('gets all the symptoms', function() {
        sinon.stub(symptomRepository, 'all').returns($q.when());
        createController();
        expect(symptomRepository.all).to.have.been.called;
    });

    it('exposes symptoms on scope', function() {
        var expectedSymptoms = [];
        sinon.stub(symptomRepository, 'all').returns($q.when(expectedSymptoms));
        createController();
        $rootScope.$digest();
        expect($scope.symptoms).to.eql(expectedSymptoms);
    });
});
