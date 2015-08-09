// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("ShareController", function($scope, $cordovaSocialSharing) {

    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/img/ionic.png", "http://lucashenrique.me")
            .then(function(result) {
              console.log('sucess');
            }, function(err) {
              console.log('An error occured');
            });
    }

    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.shareViaTwitter(message, image, link)
            .then(function(result) {
              console.log('sucess');
            }, function(err) {
              console.log('An error occured');
            });
    }

    $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing.shareViaFacebook(message, image, link)
            .then(function (result) {
                console.log('sucess');
            }, function(err) {
                console.log('An error occured');
            });
    }

    $scope.shareViaWhatsApp = function(message, image, link) {
        $cordovaSocialSharing.shareViaWhatsApp(message, image, link)
            .then(function (result) {
                console.log('sucess');
            }, function(err) {
                console.log('An error occured');
            });
    }
});
