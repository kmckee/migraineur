angular.module('settings', [])

.config(function($stateProvider) {
    $stateProvider.state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'app/settings/tab-settings.html',
                controller: 'SettingsCtrl'
            }
        }
    });
});
