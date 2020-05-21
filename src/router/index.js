import Vue from 'vue';
import VueRouter from 'vue-router';
import CurrentLocationISS from '../views/CurrentLocation.vue';
import IssPassTime from '../views/Passtime.vue';
import HumanOnISS from '../views/HumanOnISS.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'current-location',
    component: CurrentLocationISS,
  },
  {
    path: '/passtime',
    name: 'passtime',
    component: IssPassTime,
  },
  {
    path: '/human-on-iss',
    name: 'human-on-iss',
    component: HumanOnISS,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
