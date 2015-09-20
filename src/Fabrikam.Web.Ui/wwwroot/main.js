﻿require.config({
    baseUrl: '',
    // Here paths are set relative to `/source` folder
    paths: {
        'angular': 'lib/angular/angular',
        'angular.translate':'lib/angular-translate/angular-translate',
        'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
        'jquery': 'lib/jquery/dist/jquery',
        'ocLazyLoad': 'lib/ocLazyLoad/dist/ocLazyLoad.require',
        'ui.bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls',
        'metisMenu': 'lib/metisMenu/dist/metisMenu',
        'angular.sanitize': 'lib/angular-sanitize/angular-sanitize',
        'angular.idle':'lib/ng-idle/angular-idle',

        'app': 'core/app',
        'app.config': 'core/appConfig',
        'app.schedules': 'schedules/module',
        'app.services': 'services/module',
        'app.directives': 'assets/inspinia/js/directives',
        'app.translations':'assets/inspinia/js/translations'
    },

    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'angular.translate':['angular'],
        'ui.router': ['angular'],
        'ocLazyLoad': ['angular'],
        'ui.bootstrap': ['angular'],
        'angular.sanitize': ['angular'],
        'angular.idle':['angular'],
        'metisMenu': ['jquery'],
        
        'app.config':['angular'],
        'app': ['app.config', 'app.schedules']
    }
});

require(['angular', 'app', 'metisMenu', 'app.directives', 'app.translations'], function (angular) {
    angular
    .module('app')
    .config(translationsConfig)
    .directive('pageTitle', pageTitle)
    .directive('sideNavigation', sideNavigation)
    .directive('iboxTools', iboxTools)
    .directive('minimalizaSidebar', minimalizaSidebar)
    .directive('vectorMap', vectorMap)
    .directive('sparkline', sparkline)
    .directive('icheck', icheck)
    .directive('ionRangeSlider', ionRangeSlider)
    .directive('dropZone', dropZone)
    .directive('responsiveVideo', responsiveVideo)
    .directive('chatSlimScroll', chatSlimScroll)
    .directive('customValid', customValid)
    .directive('fullScroll', fullScroll)
    .directive('closeOffCanvas', closeOffCanvas)
    .directive('clockPicker', clockPicker)
    .directive('landingScrollspy', landingScrollspy)
    .directive('fitHeight', fitHeight)
    .directive('iboxToolsFullScreen', iboxToolsFullScreen)
    .directive('slimScroll', slimScroll);
    console.log('Registered Directives');

    angular.bootstrap(document, ['app']);
    console.log('Bootstrapped');
});
