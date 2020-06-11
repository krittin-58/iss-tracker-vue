<template>
  <div>
    <h2>{{ text.headline }}</h2>
    <h3>{{ currentISS ? currentISS : errorMessage }}</h3>
    <br>
    <div id="map">Google Map for ISS</div>
  </div>
</template>
<script src="https://www.google.com/jsapi?.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPfsUHzo1zs975xWEjxQouL5oK1wXdTZs&sensor=false&callback=initialize"></script>
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
    // this.initMap();
    // this.initialize(this.issGeoLocation.lat, this.issGeoLocation.lng);
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
      }, 5000);
    },

    async initialize(lat, lng) {
      var directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer();
      var chicago = new google.maps.LatLng(lat, lng);

      var mapOptions = { zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP, center: chicago }
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      directionsDisplay.setMap(map);

      var marker = new google.maps.Marker({ position: chicago, map: map });

      return map;
    },
  },

};

</script>

<style scoped>
  #map {
  height: 500px;
}
/* Optional: Makes the sample page fill the window. */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
