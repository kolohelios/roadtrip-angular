'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function(Trip, $scope, $window){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });

  $scope.destroy = function(tripId){
    Trip.destroy(tripId)
    .then(function(result){
      console.log(result);
      $window._.remove($scope.trips, result.data);
    });
  };

});
