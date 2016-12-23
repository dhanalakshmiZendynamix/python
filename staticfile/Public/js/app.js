/**
 * Created by MohammedSaleem on 11/11/15.
 */

var dependencies = ['ui.router','circularLoaderUI','hrLoaderUI','flashGraphUI','slickCarousel'];

var NEC = angular.module("NEC", dependencies);

NEC.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('admin', {
        url: "/admin",
        templateUrl: 'credentials/admin.html',
        controller: 'loginCtrl'
    })
        .state('admin.signIn', {
            url: "/signIn",
            templateUrl: 'credentials/signIn.html'
        })
        .state('admin.signUp', {
            url: "/signUp",
            templateUrl: 'credentials/signUp.html'
        })
        .state('app', {
            url: "/app",
            templateUrl: 'templates/app.html'
        })
        .state('app.dashboard', {
            url: "/dashboard",
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardController'
        })
        .state('app.dashboard.dashboardMap', {
            url: "/dashboardMap",
            templateUrl: 'templates/dashboardMap.html',
            controller: 'dashboardMapController'
        })
        .state('app.dashboard.dashboardGraph', {
            url: "/dashboardGraph",
            templateUrl: 'templates/dashboardGraph.html',
            controller: 'dashboardGraphController'
        })
        .state('app.canvas', {
            url: "/canvas",
            templateUrl: 'templates/canvas.html',
            controller: 'canvasController'
        })
        .state('app.watchlist', {
            url: "/watchlist",
            templateUrl: 'templates/watchlist.html',
            controller: 'dashboardController'
        })
        .state('app.reports', {
            url: "/reports",
            templateUrl: 'templates/reports.html'
        });

    $urlRouterProvider.otherwise("/app/dashboard/dashboardMap");
});


NEC.directive('repeatDone', function () {
    return function (scope, element, attrs) {
        if (scope.$last) { // all are rendered
            scope.$eval(attrs.repeatDone);
        }
    }
});