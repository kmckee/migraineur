angular.module('symptoms', [])

.config(function($stateProvider) {
    $stateProvider.state('tab.symptoms', {
        url: '/symptoms',
        views: {
            'tab-symptoms': {
                templateUrl: 'app/symptoms/tab-symptoms.html',
                controller: 'SymptomsCtrl'
            }
        }
    })
    .state('tab.symptom-detail', {
        url: '/symptoms/:symptomId',
        views: {
            'tab-symptoms': {
                templateUrl: 'app/symptoms/symptom-detail.html',
                controller: 'SymptomDetailCtrl'
            }
        }
    });
});
