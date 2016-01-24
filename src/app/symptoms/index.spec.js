describe('SymptomsIndexCtrl', function() {
    var symptomRepository, createController, $scope, sandbox, $q;
    beforeEach(module('starter'));
    beforeEach(inject(function($controller, $rootScope, _$q_) {
        sandbox = sinon.sandbox.create();
        $q = _$q_;
        symptomRepository = { all: function() {} };
        $scope = $rootScope.$new();
        createController = function() {
            return $controller('SymptomsCtrl', {
                $scope: $scope,
                symptomRepository: symptomRepository
            });
        };

    }));
    afterEach(function () {
        sandbox.restore();
    });
    it('gets all the symptoms', function() {
        sinon.stub(symptomRepository, 'all').returns($q.when());
        createController();
        expect(symptomRepository.all).to.have.been.called;
    });
});
