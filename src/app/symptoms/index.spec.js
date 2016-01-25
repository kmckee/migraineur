describe('SymptomsIndexCtrl', function() {
    var symptomRepository, createController, $scope, sandbox, $q, $rootScope;
    beforeEach(module('starter'));
    beforeEach(module('templates'));
    beforeEach(inject(function($controller, _$rootScope_, _$q_) {
        sandbox = sinon.sandbox.create();
        $q = _$q_;
        symptomRepository = {
            all: function() {}
        };
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        createController = function() {
            return $controller('SymptomsCtrl', {
                $scope: $scope,
                symptomRepository: symptomRepository
            });
        };

    }));
    afterEach(function() {
        sandbox.restore();
    });
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
