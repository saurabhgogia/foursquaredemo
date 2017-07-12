angular.module('App')
.config(function($stateProvider) {
  $stateProvider.state('location', {
    url: '/location',
    controller: 'LocationController as vm',
    templateUrl: 'views/location/location.html'
  });
})
.controller('LocationController', function($ionicLoading, $http, $state, Geolocation, $cordovaGeolocation, $ionicPopup) {
  var vm = this;
});