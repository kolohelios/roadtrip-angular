'use strict';

angular.module('roadtrip')
.controller('TripsShowCtrl', function(Trip, $scope, $state, Map){

  Trip.show($state.params.tripId)
  .then(function(response){
    $scope.trip = response.data;
  });

  var map = Map.create('#map', 48.9881, -122.7436, 12);

});