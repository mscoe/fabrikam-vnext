require.config({
    baseUrl: '',
    // Here paths are set relative to `/source` folder
    paths: {
        'angular': 'lib/angular/angular',
        'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
        'jquery': 'lib/jquery/dist/jquery',
        'ocLazyLoad': 'lib/ocLazyLoad/dist/ocLazyLoad.require',

        'app': 'core/app',
        'app.config': 'core/appConfig',
        'app.moduleone': 'moduleone/module',
        'app.services':'services/module'
    },

    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'ui.router': ['angular'],
        'ocLazyLoad': ['angular'],
        'app.config':['angular'],
        'app': ['app.config', 'app.moduleone']
    }
});

require(['angular','app'], function (angular) {
    angular.bootstrap(document, ['app']);
    console.log('Bootstrapped');
});