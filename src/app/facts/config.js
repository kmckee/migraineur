angular.module('facts', [])

.config(function($stateProvider) {
    $stateProvider

    .state('tab.facts', {
        url: '/facts',
        views: {
            'tab-facts': {
                templateUrl: 'app/facts/tab-facts.html',
                controller: 'FactsCtrl'
            }
        }
    })
    .state('tab.fact-detail', {
        url: '/facts/:factId',
        views: {
            'tab-facts': {
                templateUrl: 'app/facts/fact-detail.html',
                controller: 'FactDetailCtrl'
            }
        }
    });
});
