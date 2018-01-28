## vuex-loading-plug
- `vuex` 的自动`loading`插件, 避免在actions的时候频繁手动显示和隐藏loading

## Install
``` bash
$ npm install vuex-loading-plug --save
# or if you using Yarn
$ yarn add vuex-loading-plug
```

## Example

### index.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <h4>{{loading}}</h4>
    <h1>{{number}}</h1>
    <div class="buttons">
      <button @click="add">添加</button>
      <button>减少</button>
    </div>
  </div>
</body>
</html>
```

### index.js - 项目入口
``` javascript
import Vue from 'vue';
import store from './store';

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
      // 执行异步
      this.$store.dispatch('asyncAdd');
    }
  }
});
```

### store.js
``` javascript
import Vue from 'vue';
import vuex from 'vuex';
import loading from 'vuex-loading-plug';

Vue.use(vuex);

// 模拟ajax请求
function ajax () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default new vuex.Store({
  state: {
    number: 1
  },
  mutations: {
    add (state) {
      state.number++;
    }
  },
  actions: {
    async asyncAdd ({ commit }) {
      await ajax();
      commit('add');
    }
  },
  // 重点 - 引入loading插件
  plugins: [loading]
});
```