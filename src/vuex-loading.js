import Vue from 'vue';

export default () => ({ state, _actions }) => {
  // 添加loading对象
  Vue.set(state, '$loading', {});
  const $loading = state.$loading;
  // 遍历
  Object.keys(_actions).forEach((key) => {
    // 设置默认值
    Vue.set($loading, key, false);
    const action = _actions[key][0];
    // 重写 进行拦截
    _actions[key][0] = async (data) => {
      let value = null;
      $loading[key] = true;
      // 异常捕获
      try {
        value = await action(data);
        $loading[key] = false;
      } catch (error) {
        $loading[key] = false;
        throw error;
      }
      return value;
    };
  });
};
