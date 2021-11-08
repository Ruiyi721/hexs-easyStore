import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// message
// vm.&bus.$emit('message:push', message, status);
// message(string): 訊息內容
// status(string): Alert 的樣式