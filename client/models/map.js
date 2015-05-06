'use strict';

angular.module('roadtrip')
.factory('Map', function($window){

  function Map(){

  }

  Map.geocode = function(address, cb){
    var geocoder = new $window.google.maps.Geocoder();
    geocoder.geocode({address: address}, cb);
  };

  Map.addMarker = function(map, lat, lng, name, icon){
    var latLng = new $window.google.maps.LatLng(lat, lng);
    var marker = new $window.google.maps.Marker({
      map: map,
      position: latLng,
      title: name,
      animation: $window.google.maps.Animation.DROP,
      icon: icon
    });
    return marker;
  };

  // Map.create('#map', 38, 90, 3)
  Map.create = function(selector, lat, lng, zoom){
    var options = {
      center: new $window.google.maps.LatLng(lat, lng),
      zoom: zoom,
      mapTypeId: $window.google.maps.MapTypeId.ROADMAP,
      styles: [{'featureType':'administrative','stylers':[{'visibility':'off'}]},{'featureType':'poi','stylers':[{'visibility':'simplified'}]},{'featureType':'road','elementType':'labels','stylers':[{'visibility':'simplified'}]},{'featureType':'water','stylers':[{'visibility':'simplified'}]},{'featureType':'transit','stylers':[{'visibility':'simplified'}]},{'featureType':'landscape','stylers':[{'visibility':'simplified'}]},{'featureType':'road.highway','stylers':[{'visibility':'off'}]},{'featureType':'road.local','stylers':[{'visibility':'on'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'visibility':'on'}]},{'featureType':'water','stylers':[{'color':'#84afa3'},{'lightness':52}]},{'stylers':[{'saturation':-17},{'gamma':0.36}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'color':'#3f518c'}]}]
    };
    selector = angular.element(selector).get(0);
    var map = new $window.google.maps.Map(selector, options);

    return map;
  };



  return Map;
});
