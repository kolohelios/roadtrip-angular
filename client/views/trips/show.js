'use strict';

angular.module('roadtrip')
.controller('TripsShowCtrl', function(Trip, $scope, $state){

  Trip.show($state.params.tripId)
  .then(function(response){
    $scope.trip = response.data;
  });

});
