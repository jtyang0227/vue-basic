import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

new Vue({
  Vuex,
  router,
  VeeValidate,
  render: (h) => h(App),
}).$mount("#app");
