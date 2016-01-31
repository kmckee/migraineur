describe('SymptomsIndexCtrl', function() {
    var symptomRepository, createController, $scope, $q, $rootScope, $ionicModal;
    beforeEach(module('starter'));
    beforeEach(module('templates'));
    beforeEach(inject(function($controller, _$rootScope_, _$q_, _$ionicModal_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $ionicModal = _$ionicModal_;
        $scope = $rootScope.$new();
        symptomRepository = { all: function() {} };
        createController = function() {
            return $controller('SymptomsCtrl', {
                $scope: $scope,
                symptomRepository: symptomRepository,
                $ionicModal: $ionicModal
            });
        };
        mockModal = {show: sinon.stub(), hide: sinon.stub()};
        sinon.stub($ionicModal, 'fromTemplateUrl').returns($q.when(mockModal));
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

    it('has a modal for adding symptoms', function() {
        sinon.stub(symptomRepository, 'all').returns($q.when());
        createController();
        $scope.$digest();
        expect($scope.addModal).to.eql(mockModal);
    });
});
