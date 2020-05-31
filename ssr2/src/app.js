// ssr 创建vue实例
import Vue from 'vue';
import App from './App.vue';
import { crateRouter } from './router/index.js';

export function createApp(context) {
   const router = crateRouter();
   const app = new Vue({
       router,
       context,
       render: h=>h(App)
   });
   return { app, router}
}