import Vue from 'vue';
import App from './App.vue';

Vue.config.performance = true;

const $vm = new Vue({
  render(h) {
    return h(App)
  }
}).$mount('#app');