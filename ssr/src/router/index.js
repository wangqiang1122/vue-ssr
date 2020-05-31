import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import detial from './src/view/details.vue'

Vue.use(Router);

export function crateRouter () {
  return new Router({
     mode: 'history',
     routes: [
       { path: '/', component: HelloWorld},
       { path: '/detial', component: detial}
     ]
  })
}
