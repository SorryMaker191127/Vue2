import Vue from "vue";
import Vuex from "vuex";
// 使用vuex
Vue.use(Vuex);
// action 相应dispach的操作
const actions = {
  //action里面执行业务逻辑
  controlCount(context, value) {
    if (value % 10 === 0) {
      context.commit("MULTIPLY_COUNT", value);
    } else if (value % 2 === 1) {
      context.commit("SUBTRACT_COUNT", value);
    } else if (value % 2 === 0) {
      context.commit("ADD_COUNT", value);
    }
  },
};
// mutation 响应commit的操作
const mutations = {
  // 具体的数据操作
  ADD_COUNT(state, value) {
    state.count += Number(value);
  },
  SUBTRACT_COUNT(state, value) {
    state.count -= value;
  },
  MULTIPLY_COUNT(state, value) {
    state.count *= value;
  },
};
// state 数据源
const state = {
  count: 0,
};
// getters 计算属性
const getters = {
  // 转化为16进制
  hexCount(state) {
    if (state.count < 16) {
      return "0x0" + state.count.toString(16);
    } else {
      return "0x" + state.count.toString(16);
    }
  },
};

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
