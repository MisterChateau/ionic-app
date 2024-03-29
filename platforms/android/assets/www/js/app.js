// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'angularMoment'])

.run(function($ionicPlatform, amMoment) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
    //set Date Format to French
    amMoment.changeLanguage('fr');
})


.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.login', {
      url: '/login',
      views: {
          'menuContent': {
              templateUrl: 'templates/login.html',
              controller: 'LoginCtrl'
          } 
      }
    })

    .state('app.welcome',{
      url: '/welcome',
      views: {
          'menuContent': {
              templateUrl: 'templates/welcome.html',
              controller: 'WelcomeCtrl'
          }
      }
    })

    .state('app.cra', {
      url: '/cra',
      views: {
          'menuContent': {
              templateUrl: 'templates/cra.html',
              controller: 'CraCtrl'
          }
      }
    })

     .state('app.leave', {
      url: '/leave',
      views: {
          'menuContent': {
              templateUrl: 'templates/leave.html',
              controller: 'LeaveCtrl'
          }
      }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
