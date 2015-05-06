'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function(Trip, $scope){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });

});
