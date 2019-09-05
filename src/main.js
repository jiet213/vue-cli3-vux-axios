import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from './api/axios'
// import { ToastPlugin, LoadingPlugin, ConfirmPlugin, AlertPlugin } from 'vux'
import ToastPlugin from "vux/src/plugins/toast";
import LoadingPlugin from "vux/src/plugins/loading";
import ConfirmPlugin from "vux/src/plugins/confirm";
import AlertPlugin from "vux/src/plugins/alert";

Vue.config.productionTip = false
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);
Vue.use(AlertPlugin);

/*axios-config*/
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')