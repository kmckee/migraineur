describe('SymptomsIndexCtrl', function() {
    var symptomRepository, createController, $scope, $q, $rootScope, $ionicModal;
    beforeEach(module('starter'));
    beforeEach(module('templates'));
    beforeEach(inject(function($controller, _$rootScope_, _$q_, _$ionicModal_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $ionicModal = _$ionicModal_;
        $scope = $rootScope.$new();
        symptomRepository = { all: function() {}, remove: function() {} };
        createController = function() {
            return $controller('SymptomsCtrl', {
                $scope: $scope,
                symptomRepository: symptomRepository,
                $ionicModal: $ionicModal
            });
        };
        mockModal = {show: jasmine.createSpy(), hide: jasmine.createSpy()};
        spyOn($ionicModal, 'fromTemplateUrl').and.returnValue($q.when(mockModal));
    }));

    it('gets all the symptoms', function() {
        spyOn(symptomRepository, 'all').and.returnValue($q.when());
        createController();
        expect(symptomRepository.all).toHaveBeenCalled();
    });

    it('exposes symptoms on scope', function() {
        var expectedSymptoms = [];
        spyOn(symptomRepository, 'all').and.returnValue($q.when(expectedSymptoms));
        createController();
        $rootScope.$digest();
        expect($scope.symptoms).toEqual(expectedSymptoms);
    });

    it('has a modal for adding symptoms', function() {
        spyOn(symptomRepository, 'all').and.returnValue($q.when());
        createController();
        $scope.$digest();
        expect($scope.addModal).toEqual(mockModal);
    });

    it('deletes symptoms from the db', function() {
        var symptom = {};
        spyOn(symptomRepository, 'all').and.returnValue($q.when([symptom]));
        spyOn(symptomRepository, 'remove').and.returnValue($q.when());
        createController();
        $scope.remove(symptom);
        expect(symptomRepository.remove).toHaveBeenCalledWith(symptom);
    });

    it('removes deleted symptoms from list on scope', function() {
        var symptom = {};
        spyOn(symptomRepository, 'all').and.returnValue($q.when([symptom]));
        spyOn(symptomRepository, 'remove').and.returnValue($q.when());
        createController();
        $scope.remove(symptom);
        $rootScope.$digest();
        expect($scope.symptoms.length).toEqual(0);
    });
});
