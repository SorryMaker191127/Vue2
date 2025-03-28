<template>
  <div class="numberControl">
    <input type="number" v-model="count" />
    <br />
    <button @click="controlNumber">执行操作</button>
    <button @click="addCount">直接加</button>
    <hr />
    <button @click="actionsControlNumber(count)">
      mapActions对象 执行操作
    </button>
    <button @click="controlCount(count)">mapActions数组 执行操作</button>
    <hr />
    <button @click="mutationAddCount(count)">mapMutations对象 直接加</button>
    <button @click="ADD_COUNT(count)">mapMutations数组 直接加</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    //先dispatch action
    controlNumber() {
      this.$store.dispatch("controlCount", this.count);
    },
    //直接commit mutation
    addCount() {
      this.$store.commit("ADD_COUNT", this.count);
    },

    //使用mapActions
    //对象写法
    ...mapActions({
      actionsControlNumber: "controlCount",
    }),
    //数组写法
    ...mapActions(["controlCount"]),

    //使用mapMutations
    //对象写法
    ...mapMutations({
      mutationAddCount: "ADD_COUNT",
    }),
    //数组写法
    ...mapMutations(["ADD_COUNT"]),
  },
};
</script>

<style scoped></style>
