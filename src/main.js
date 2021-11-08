// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";

import App from "./App";
import router from "./router";
import './bus';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// 對所有 axios 請求允許攜帶cookie
// axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  // 要是有requiresAuth就做驗證的動作
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    // 這裡不能使用this.$http 需要在vue的元件下才能使用，但目前是寫在router裡，所以需用axios
    axios.post(api).then(response => {
      // console.log(response.data);
      // 要是登入狀態是yes則放行
      if (response.data.success) {
        next();
      }
      // 否則導回login頁
      else {
        next({
          path: "/login"
        });
      }
    });
  }
  // 沒有就放行
  else {
    next();
  }
});
