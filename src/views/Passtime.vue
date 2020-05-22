<template>
  <div>
    <h2>{{ text.headline }}</h2>
    <h3>{{ passtime }}</h3>
    <h4>{{ error }}</h4>
  </div>
</template>

<script>
import ApiService from '../services/api';

export default {
  name: 'PassTime-ISS',
  data() {
    return {
      text: {
        headline: 'ISS Pass Time',
      },
      locations: {
        lat: '48.4809',
        lon: '-167.7702',
      },
      passtime: null,
      error: '',
    };
  },

  mounted() {
    this.getPassTime();
  },

  methods: {
    getPassTime() {
      ApiService.getPassTimeISS(this.locations.lat, this.locations.lon).then((data) => {
        this.passtime = data.data.request;
      }).catch((error) => {
        this.error = error;
      });
    },
  },
};
</script>
