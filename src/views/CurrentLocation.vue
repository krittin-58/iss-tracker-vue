<template>
  <div>
    <h2>{{ text.headline }}</h2>
    <h3>{{ currentISS ? currentISS : errorMessage }}</h3>
  </div>
</template>

<script>
import ApiService from '../services/api';

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
      }, 5000);
    },
  },
};

</script>
