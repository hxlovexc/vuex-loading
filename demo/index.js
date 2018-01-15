import Vue from 'vue';
import 'es6-promise/auto';
import store from './src/store/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  computed: {
    number () {
      return this.$store.state.number;
    }
  }
});
