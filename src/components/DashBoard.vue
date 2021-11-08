<template>
  <div>
    <Navbar />
    <AlertMsg />
    
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./NavBar.vue";
import Sidebar from "./Sidebar.vue";
import AlertMsg from "./AlertMsg.vue";

export default {
  name: 'DashBoard',
  components: {
    Navbar,
    Sidebar,
    AlertMsg
  },
  created() {
    // 讀cookie
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
  }
};
</script>
