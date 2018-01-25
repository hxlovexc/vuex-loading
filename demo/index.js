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
    },
    loading () {
      return this.$store.state.$loading;
    }
  },
  methods: {
    add () {
      this.$store.dispatch('asyncAdd');
    }
  }
});
