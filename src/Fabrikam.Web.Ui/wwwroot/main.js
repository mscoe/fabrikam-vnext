require.config({
    baseUrl: '.',
    // Here paths are set relative to `/source` folder
    paths: {
        'angular': 'lib/angular/angular',
        'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
        'jquery': 'lib/jquery/dist/jquery',

        'app': 'core/app',
        'app.Config':'core/appConfig'
    },

    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'ui.router': ['angular'],
        'app': ['app.Config']
    }
});

require(['angular','app'], function (angular) {
    angular.bootstrap(document,['app']);
});