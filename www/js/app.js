// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.native'])

.run(function($ionicPlatform, $cordovaKeyboard, $cordovaStatusBar, $cordovaGeolocation, $cordovaCamera, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $cordovaKeyboard.hideKeyboardAccessoryBar(true);

    // Don't remove this line unless you know what you are doing. It stops the viewport
    // from snapping when text inputs are focused. Ionic handles this internally for
    // a much nicer keyboard experience.
    $cordovaKeyboard.disableScroll(true);

    $cordovaStatusBar.styleDefault();

    $rootScope.getPicture = function() {
      $cordovaCamera.getPicture()
        .then(function(res) { console.log('Picture is ', res) }, function(err) { console.log('Error getting picture', err); });
    };

    $rootScope.getLocation = function() {
      $cordovaGeolocation.getCurrentPosition({ enableHighAccuracy: true })
        .then(function(res) { console.log('Location is ', res) }, function(err) { console.log('Error getting location', err); });
    };
  });
})
