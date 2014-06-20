// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angularMoment'])

.run(function ($ionicPlatform, $rootScope, amMoment) {
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

    //define API variable
    $rootScope.urlDefaultServer = "http://services.gdt.eugena.fr/gdtmobile/rest/";
    $rootScope.urlIdentification = "auth";

    //check if user is already authenticated
    $rootScope.isAuthenticated = function(){
      if(localStorage.getItem('authenticated') != null){
        return true;
      }
      else{
        return false;
      }

    }
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
      onEnter: function($state, $rootScope){
        if($rootScope.isAuthenticated()){
          $state.go('app.welcome');
        }
      },
      views: {
          'menuContent': {
              templateUrl: 'templates/login.html',
              controller: 'LoginCtrl'
          }
      }
    })

    .state('app.welcome',{
      url: '/welcome',
      onEnter: function($state, $rootScope){
        if(!$rootScope.isAuthenticated()){
          $state.go('app.login');
        }
      },
      views: {
          'menuContent': {
              templateUrl: 'templates/welcome.html',
              controller: 'WelcomeCtrl'
          }
      }
    })

    .state('app.cra', {
      url: '/cra',
      onEnter: function($state, $rootScope){
        if(!$rootScope.isAuthenticated()){
          $state.go('app.login');
        }
      },
      views: {
          'menuContent': {
              templateUrl: 'templates/cra.html',
              controller: 'CraCtrl'
          }
      }
    })

     .state('app.leave', {
      url: '/leave',
      onEnter: function($state, $rootScope){
        if(!$rootScope.isAuthenticated()){
          $state.go('app.login');
        }
      },
      views: {
          'menuContent': {
              templateUrl: 'templates/leave.html',
              controller: 'LeaveCtrl'
          }
      }
    })

     .state('app.about', {
      url: '/about',
      onEnter: function($state, $rootScope){
        if(!$rootScope.isAuthenticated()){
          $state.go('app.login');
        }
      },
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
     })

     .state('app.news', {
        url: '/news',
        onEnter: function($state, $rootScope){
        if(!$rootScope.isAuthenticated()){
          $state.go('app.login');
        }
      },
        views: {
          'menuContent': {
            templateUrl: 'templates/news.html',
            controller: 'NewsCtrl'
          }
        }
     })

     .state('app.tweets', {
      url: '/tweets',
      onEnter: function($state, $rootScope){
        if(!$rootScope.isAuthenticated()){
          $state.go('app.login');
        }
      },
      views: {
        'menuContent': {
          templateUrl: 'templates/tweets.html',
          controller: 'TweetsCtrl'
        }
      }
     });

    // if none of the above states are matched, use this as the fallback
    if(localStorage.getItem('authenticated') != null){
      console.log(localStorage.getItem('authenticated'));
      $urlRouterProvider.otherwise('/app/welcome');
    }else{
      console.log(localStorage.getItem('authenticated'));
      $urlRouterProvider.otherwise('/app/login');
    }
});
