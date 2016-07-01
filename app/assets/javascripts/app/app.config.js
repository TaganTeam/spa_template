angular
    .module('appName', [
        'ui.router',
        'templates',
        'ngMessages',
        'ngAnimate',
        'angular-storage',
        'ui.bootstrap',
        'ngTouch'
    ])
    .constant('CONFIG',
        {
            APIHost: 'http://localhost:3000'
        });