'use strict';

angular.module('roadtrip')
.factory('Trip', function($http, nodeUrl){

  function Trip(obj){
    this._id = obj._id;
    this.name = obj.name;
    this.departure = obj.departure;
  }

  Trip.find = function(){
    return $http.get(nodeUrl + '/trips');
  };

  Trip.prototype.save = function(){
    return $http.post(nodeUrl + '/trips', this);
  };

  Trip.show = function(tripId){
    return $http.get(nodeUrl + '/trips/' + tripId);
  };

  Trip.prototype.addStop = function(stop){
    return $http.post(nodeUrl + '/trips/' + this._id + '/stops', stop);
  };

  Trip.destroy = function(tripId){
    return $http.delete(nodeUrl + '/trips/' + tripId);
  };

  Trip.removeStop = function(stop, tripId){
    return $http.delete(nodeUrl + '/trips/' + tripId + '/stops/' + stop)
  };

  return Trip;
});
