/* jshint camelcase: false */
'use strict';

angular.module('roadtrip')
.controller('TripsShowCtrl', function(Trip, $scope, $state, Map, $window){

  $scope.stops = [];

  Trip.show($state.params.tripId)
  .then(function(response){
    $scope.trip = response.data;
    $scope.stops = response.data.stops;
    addMarkers();
  });

  var map = Map.create('#map', 48.9881, -122.7436, 4);
  var markers = [];

  $scope.create = function(stop){
    Map.geocode(stop.name, function(results){
      if(results && results.length){
        stop.name = results[0].formatted_address;
        stop.lat = results[0].geometry.location.lat();
        stop.lng = results[0].geometry.location.lng();
        var trip = new Trip($scope.trip);
        trip.addStop(stop)
        .then(function(response){
          $scope.trip.stops.push(response.data);
          addMarkers();
        });
      }
    });
  };

  function addMarkers(){
    clearMarkers();
    markers = $scope.trip.stops.map(function(markerData){
      return Map.addMarker(map, markerData.lat, markerData.lng, markerData.name, '/assets/map-marker.png');
    });
  }

  function clearMarkers(){
    markers.forEach(function(m){
      m.setMap(null);
    });
    markers = [];
  }

  $scope.remove = function(stop, tripId){
    Trip.removeStop(stop, tripId)
    .then(function(result){
      $window._.remove($scope.trip.stops, {_id: result.data});
      addMarkers();
    });
  };

});
