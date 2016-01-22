angular.module('starter', ['ionic', 'pouchdb', 'symptoms', 'settings'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.KeybFactoard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'app/tabs.html'
    })

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
    })

    .state('tab.analysis', {
        url: '/analysis',
        views: {
            'tab-analysis': {
                templateUrl: 'app/analysis/tab-analysis.html',
                controller: 'AnalysisCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/symptoms');

});
