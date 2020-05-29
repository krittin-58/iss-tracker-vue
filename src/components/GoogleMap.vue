<template>
  <div>
    <br>
    <gmap-map
      :center="issLocation"
      :zoom="8"
      style="width:100%; height: 500px;"
    >
      <gmap-marker
        :position="issLocation"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
// lat: 8.4242435, lng: 99.8963918

export default {
  name: 'GoogleMap',

  props: {
    latitude: null,
    longtitude: null,
  },

  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 8.4242435, lng: 99.8963918 },
      markers: [],
      places: [],
      currentPlace: null,
      issLocation: {
        lat: this.$props.latitude,
        lng: this.$props.longtitude,
      },
    };
  },

  mounted() {
    // this.geolocate();
    // Set interval
    setTimeout(() => {
      this.ISSlocate();
      this.addMarker();
    }, 5000);
  },

  methods: {
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    ISSlocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.issLocation = {
          lat: parseFloat(position.coords.latitude),
          lng: parseFloat(position.coords.longitude),
        };
      });
      this.$forceUpdate();
    },
  },

  watch: {
    //
  },
};
</script>
