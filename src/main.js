import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDzCJNxwqR9vqUfFONJKUMtjn8nlTqw-94',
    // libraries: 'place',
  },
  installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
