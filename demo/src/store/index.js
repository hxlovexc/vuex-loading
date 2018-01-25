import Vue from 'vue';
import vuex from 'vuex';
import loading from '../../../src/vuex-loading';

Vue.use(vuex);

function ajax () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('time');
      resolve();
    }, 1000);
  });
}

// 实例
export default new vuex.Store({
  state: {
    number: 1
  },
  mutations: {
    add (state) {
      console.log('add');
      state.number++;
    }
  },
  actions: {
    async asyncAdd ({ commit }) {
      await ajax();
      commit('add');
    }
  },
  plugins: [loading()]
});
