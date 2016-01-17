// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:
    .state('tab.symptoms', {
        url: '/symptoms',
        views: {
            'tab-symptoms': {
                templateUrl: 'templates/tab-symptoms.html',
                controller: 'SymptomsCtrl'
            }
        }
    })
    .state('tab.symptom-detail', {
        url: '/symptoms/:symptomId',
        views: {
            'tab-symptoms': {
                templateUrl: 'templates/symptom-detail.html',
                controller: 'SymptomDetailCtrl'
            }
        }
    })

    .state('tab.facts', {
        url: '/facts',
        views: {
            'tab-facts': {
                templateUrl: 'templates/tab-facts.html',
                controller: 'FactsCtrl'
            }
        }
    })
    .state('tab.fact-detail', {
        url: '/facts/:factId',
        views: {
            'tab-facts': {
                templateUrl: 'templates/fact-detail.html',
                controller: 'FactDetailCtrl'
            }
        }
    })

    .state('tab.analysis', {
        url: '/analysis',
        views: {
            'tab-analysis': {
                templateUrl: 'templates/tab-analysis.html',
                controller: 'AnalysisCtrl'
            }
        }
    })

    .state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/tab-settings.html',
                controller: 'SettingsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/symptoms');

});
