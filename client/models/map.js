'use strict';

angular.module('roadtrip')
.factory('Map', function($window){

  function Map(){

  }

  // Map.create('#map', 38, 90, 3)
  Map.create = function(selector, lat, lng, zoom){
    var options = {
      center: new $window.google.maps.LatLng(lat, lng),
      zoom: zoom,
      mapTypeId: $window.google.maps.MapTypeId.ROADMAP
    };
    selector = angular.element(selector).get(0);
    var map = new $window.google.maps.Map(selector, options);

    return map;
  };

  return Map;
});
