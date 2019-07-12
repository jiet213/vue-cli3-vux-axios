import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      component: () =>
        import('../views/index.vue'),
      meta: {
        title: '移动保全'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index.vue'),
      meta: {
        title: '移动保全'
      }
    },
    {
      path: '/baoq-search-new',
      name: 'baoqSearchNew',
      component: () => import('../views/search-new.vue'),
      meta: {
        title: ''
      }
    }
  ]
})

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  Vue.$vux.loading.show({
    text: '加载中...'
  });
  next();
  window.scrollTo(0, 0);
  // 返回状态判断
  // axios.interceptors.response.use((res) => {
  //   if (res.status !== 200) {
  //     return Promise.reject(res);
  //   }
  //   if (!!res.data.errCode) {
  //     if (res.data.errCode == 10011) {
  //       //链接失效
  //       next({
  //         name: 'linkFailure'
  //       });
  //     }
  //     if (res.data.errCode == 10012) {
  //       //未注册
  //       next({
  //         name: 'register'
  //       });
  //     }
  //     if (res.data.errCode == 10013) {
  //       //没有邀请码
  //       next({
  //         name: 'inviteCode'
  //       });
  //     }
  //   }

  //   return res;
  // }, (error) => {
  //   return Promise.reject(error);
  // });
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  Vue.$vux.loading.hide();
})

export default router