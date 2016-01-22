angular.module('analysis', [])

.config(function($stateProvider) {
    $stateProvider
    
    .state('tab.analysis', {
        url: '/analysis',
        views: {
            'tab-analysis': {
                templateUrl: 'app/analysis/tab-analysis.html',
                controller: 'AnalysisCtrl'
            }
        }
    });

});
