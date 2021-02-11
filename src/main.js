import Vue from "vue";
import vuetify from "./plugins/vuetify";

// https://github.com/euvl/vue-notification
import Notifications from "vue-notification";
Vue.use(Notifications);

import App from "./App.vue";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
