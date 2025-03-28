import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//模块化vuex
// 可直接引入模块
// import countAbout from "./count"
// 或者直接定义模块
const countAbout = {
  namespaced: true,
  actions: {
    controlCount(context, value) {
      if (value % 2 == 0) {
        context.commit("ADD_COUNT", value);
      } else {
        context.commit("MINUS_COUNT", value);
      }
    },
  },
  mutations: {
    ADD_COUNT(state, value) {
      state.count += value;
    },
    MINUS_COUNT(state, value) {
      state.count -= value;
    },
  },
  state: {
    count: 0,
  },
  getters: {
    plusCount(state) {
      return state.count * 10;
    },
  },
};
export default new Vuex.Store({
  modules: {
    countAbout,
  },
});
