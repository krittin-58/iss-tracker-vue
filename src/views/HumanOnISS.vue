<template>
  <div>
    <h2>{{ text.headline }}</h2>
    <h3>Count: {{ crewISS.number }}</h3>
    <li>{{ crewPeople[0].name }}</li>
    <li>{{ crewPeople[1].name }}</li>
    <li>{{ crewPeople[2].name }}</li>
  </div>
</template>

<script>
import ApiService from '../services/api';

export default {
  name: 'HumanOn-ISS',
  data() {
    return {
      text: {
        headline: 'How many people on ISS ?',
      },
      crewISS: null,
      crewPeople: null,
      error: null,
    };
  },

  mounted() {
    this.getHumanISS();
  },

  methods: {
    getHumanISS() {
      ApiService.getHumanOnISS().then((data) => {
        this.crewISS = data.data;
        this.crewPeople = data.data.people;
      }).catch((error) => {
        this.error = error;
      });
    },
  },
};
</script>
