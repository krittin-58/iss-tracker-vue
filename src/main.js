import Vue from 'vue';
import x5GMaps from 'x5-gmaps';
import App from './App.vue';
import router from './router';


Vue.use(x5GMaps, 'AIzaSyBs1AwgEI7aFQ-vimkQv4cHUQkmWiqmdDY');

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
