import Vue from 'vue';

module.exports = ({ state, _actions }) => {
  // 添加loading对象
  const $loading = {};
  // 遍历
  for (let key in _actions) {
    // 设置默认值
    $loading[key] = false;
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
  }
  Vue.set(state, '$loading', $loading);
};
