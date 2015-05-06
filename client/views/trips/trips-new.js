'use strict';

angular.module('roadtrip')
.controller('TripsNewCtrl', function($scope, Trip, $state){

  $scope.create = function(o){
    var trip = new Trip(o);
    trip.save()
    .then(function(){
      $state.go('trips.list');
    });
  };
});
