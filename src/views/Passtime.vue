<template>
  <div>
    <h2>{{ text.headline }}</h2>
    <h3>Request data: {{ passtime.request ? passtime.request : error }}</h3>
    <h3>Response data: {{ passtime.response ? passtime.response : error }}</h3>
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
        lat: '8.5836564',
        lon: '99.2249204',
      },
      passtime: {
        request: null,
        response: null,
      },
      error: '',
    };
  },

  mounted() {
    this.getPassTime();
  },

  methods: {
    getPassTime() {
      ApiService.getPassTimeISS(this.locations.lat, this.locations.lon).then((data) => {
        this.passtime.request = data.data.request;
        this.passtime.response = data.data.response;
      }).catch((error) => {
        this.error = error;
      });
    },
  },
};
</script>
