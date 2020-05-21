<template>
  <div>
    <h2>{{ text.headline }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HumanOn-ISS',
  data() {
    return {
      text: {
        headline: 'How many people on ISS ?',
      },
    };
  },
};
</script>
