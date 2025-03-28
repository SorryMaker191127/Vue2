export default {
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
