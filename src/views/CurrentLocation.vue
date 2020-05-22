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
  data() {
    return {
      text: {
        headline: 'ISS Current Location',
      },
      currentISS: null,
      errorMessage: '',
    };
  },

  mounted() {
    this.getISS();
    // Set interval
    setInterval(() => {
      this.getISS();
    }, 5000);
  },

  methods: {
    getISS() {
      ApiService.getCurrentLocationISS().then((data) => {
        this.currentISS = data.data.iss_position;
      }).catch((error) => {
        this.errorMessage = error;
      });
    },
  },
};

</script>
