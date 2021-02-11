import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from "./plugins/vuetify";
import { Quasar, Notify } from "quasar";

Vue.config.productionTip = false;

Vue.use(Quasar, {
  plugins: {
    Notify
  },
  config: {
    notify: {
      /* look at QUASARCONFOPTIONS from the API card (bottom of page) */
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
