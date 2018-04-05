import appendScript from "./appendScript"

import { setActiveStructure, setMapMarkers } from "../services/actions"
import { getMarkers } from "../services/reducer"

export const CONFIG = {
  googleMapsScriptUrl: "https://maps.googleapis.com/maps/api/js?key=",
  googleMapsContainerId: "GoogleMapsContainer",
  googleMapsSecretKey: "AIzaSyCE9i1dSl9IcU9NYghiX7ZT6dI-zUT0RNI",
  googleMapsZoom: 7,
  googleMapsCenterLat: 49.14,
  googleMapsCenterLng: 16.37,
  googleMapsStyle: [
	  {
		  "stylers": [
			  {
				  "saturation": "0"
			  },
			  {
				  "lightness": "30"
			  },
			  {
				  "visibility": "on"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.country",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.land_parcel",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.locality",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "60"
			  },
			  {
				  "gamma": "1.00"
			  },
			  {
				  "visibility": "on"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.locality",
		  "elementType": "labels.text.fill",
		  "stylers": [
			  {
				  "lightness": "-8"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.locality",
		  "elementType": "labels.text.stroke",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.neighborhood",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "administrative.province",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "landscape",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "landscape",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "landscape.man_made",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "-4"
			  }
		  ]
	  },
	  {
		  "featureType": "landscape.natural",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "50"
			  },
			  {
				  "gamma": "1.00"
			  }
		  ]
	  },
	  {
		  "featureType": "landscape.natural",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi",
		  "stylers": [
			  {
				  "saturation": "-100"
			  }
		  ]
	  },
	  {
		  "featureType": "poi",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.attraction",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.business",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.government",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.medical",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.park",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "62"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.place_of_worship",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.school",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "-5"
			  }
		  ]
	  },
	  {
		  "featureType": "poi.sports_complex",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "5"
			  }
		  ]
	  },
	  {
		  "featureType": "road",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.arterial",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "15"
			  },
			  {
				  "gamma": "1.00"
			  }
		  ]
	  },
	  {
		  "featureType": "road.arterial",
		  "elementType": "geometry.stroke",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.arterial",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.arterial",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.highway",
		  "stylers": [
			  {
				  "saturation": "-100"
			  },
			  {
				  "lightness": "-10"
			  },
			  {
				  "visibility": "on"
			  }
		  ]
	  },
	  {
		  "featureType": "road.highway",
		  "elementType": "geometry.stroke",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.highway",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.highway",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.local",
		  "stylers": [
			  {
				  "lightness": "100"
			  }
		  ]
	  },
	  {
		  "featureType": "road.local",
		  "elementType": "geometry.stroke",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "road.local",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "lightness": "-35"
			  },
			  {
				  "visibility": "simplified"
			  }
		  ]
	  },
	  {
		  "featureType": "road.local",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "transit",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "transit",
		  "elementType": "labels.icon",
		  "stylers": [
			  {
				  "visibility": "off"
			  }
		  ]
	  },
	  {
		  "featureType": "transit.line",
		  "stylers": [
			  {
				  "visibility": "simplified"
			  }
		  ]
	  },
	  {
		  "featureType": "water",
		  "stylers": [
			  {
				  "saturation": "-72"
			  },
			  {
				  "lightness": "-12"
			  },
			  {
				  "visibility": "simplified"
			  }
		  ]
	  },
	  {
		  "featureType": "water",
		  "elementType": "labels",
		  "stylers": [
			  {
				  "lightness": "-21"
			  },
			  {
				  "visibility": "simplified"
			  }
		  ]
	  },
	  {
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			  {
				  "lightness": "40"
			  }
		  ]
	  }
  ]
};



class Mapbox {

  map = null;

  list = null;

  points = [];

  constructor() {
    this.initGoogleMaps();
  }

  initGoogleMaps() {
	  var uluru = {lat: CONFIG.googleMapsCenterLat, lng: CONFIG.googleMapsCenterLng};
	  this.map = new window.google.maps.Map(document.getElementById(CONFIG.googleMapsContainerId), {
		  zoom: CONFIG.googleMapsZoom,
		  center: uluru,
		  styles: CONFIG.googleMapsStyle
	  });
  }

  interposeLabels(labels) {
    // Erase current ones at first
    this.clearPoints();
    window.mapPoints = [];

    labels.forEach(marker => {

      // make a marker for each feature and add to the map
      var coordinates = marker.geometry.coordinates;
      var point = new window.google.maps.Marker({
			position: {lng: coordinates[0], lat: coordinates[1], },
			map: this.map
      });
      point.addListener("click", () => {
		  window.reduxStore.dispatch(setActiveStructure(marker.properties.id))
	  });

      this.points.push(point);
      window.mapPoints.push( {'id': marker.properties.id, 'title': marker.properties.title} );
    })

  }

  clearPoints() {
    for (let i=0; i<this.points.length; i++) {
		this.points[i].setMap(null)
    }
    this.points.length = 0;
  }

  static loadScript() {
    return appendScript(CONFIG.googleMapsScriptUrl + CONFIG.googleMapsSecretKey);
  }
}

export default Mapbox
