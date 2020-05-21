<template>
  <div>
    <h2>{{ text.headline }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CurrentLocationISS',
  data() {
    return {
      text: {
        headline: 'ISS Current Location',
      },
    };
  },
};

</script>
