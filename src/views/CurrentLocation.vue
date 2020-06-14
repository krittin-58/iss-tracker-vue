<template>
  <div>
    <h2>{{ text.headline }}</h2>
    <h3>
      Latitude : {{ currentISS.latitude ? currentISS.latitude : errorMessage }}
      longitude : {{ currentISS.longitude ? currentISS.longitude : errorMessage }} <br>
      Updated every 10 seconds
    </h3>
    <br>
    <div id="map">Loading map</div>
  </div>
</template>
<script src="https://www.google.com/jsapi?.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPfsUHzo1zs975xWEjxQouL5oK1wXdTZs&sensor=true&callback=initialize"></script>
<script>

import ApiService from '../services/api';

var directionsDisplay,
    directionsService,
    map;

export default {
  name: 'CurrentLocationISS',
  components: {},

  data() {
    return {
      text: {
        headline: 'ISS Current Location',
      },
      currentISS: null,
      issGeoLocation: {
        lat: null,
        lng: null,
      },
      errorMessage: '',
    };
  },

  mounted() {
    this.getISS();
  },

  methods: {
    getISS() {
      ApiService.getCurrentLocationISS().then((data) => {
        this.currentISS = data.data.iss_position;
        this.issGeoLocation.lat = parseFloat(data.data.iss_position.latitude);
        this.issGeoLocation.lng = parseFloat(data.data.iss_position.longitude);
      }).catch((error) => {
        this.errorMessage = error;
      });
      // Set interval
      setTimeout(() => {
        this.getISS();
        this.initialize(this.issGeoLocation.lat,this.issGeoLocation.lng);
      }, 10000);
    },

    async initialize(lat, lng) {
      var directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer();
      var issLatLng = new google.maps.LatLng(lat, lng);

      var mapOptions = {
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: issLatLng,
        zoomControl: false,
        scaleControl: true
      }
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      directionsDisplay.setMap(map);

      var iconISS = 'https://science.nasa.gov/science-pink/s3fs-public/styles/large/public/thumbnails/image/ISS-sm.png';

      var marker = new google.maps.Marker({
        position: issLatLng,
        map: map,
        icon: iconISS
      });

      return map;
    },
  },

};

</script>

<style scoped>
  #map {
  height: 800px;
}
/* Optional: Makes the sample page fill the window. */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
