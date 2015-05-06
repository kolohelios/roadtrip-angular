/* jshint camelcase: false */
'use strict';

angular.module('roadtrip')
.controller('TripsShowCtrl', function(Trip, $scope, $state, Map){

  Trip.show($state.params.tripId)
  .then(function(response){
    $scope.trip = response.data;
  });

  $scope.map = Map.create('#map', 48.9881, -122.7436, 12);

  $scope.create = function(stop){
    Map.geocode(stop.name, function(results){
      if(results && results.length){
        stop.name = results[0].formatted_address;
        stop.lat = results[0].geometry.location.lat();
        stop.lng = results[0].geometry.location.lng();
        var trip = new Trip($scope.trip);
        trip.addStop(stop)
        .then(function(response){
          console.info(response);
        });
      }
    });
  };

});
