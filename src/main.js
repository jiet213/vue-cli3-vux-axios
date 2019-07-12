import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from 'axios'
import {
  ToastPlugin,
  LoadingPlugin,
  ConfirmPlugin,
  AlertPlugin
} from 'vux'

Vue.config.productionTip = false
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);
Vue.use(AlertPlugin);

/*axios-config*/
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = process.env.VUE_APP_BASEURL;
axios.defaults.withCredentials = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
