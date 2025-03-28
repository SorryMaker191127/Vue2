<template>
  <div class="numberControl">
    <h2>Count:{{ $store.state.count }}</h2>
    <h2>16进制Count:{{ $store.getters.hexCount }}</h2>
    <hr />
    <h2>mapState Count:{{ count }}</h2>
    <h2>mapGetters 16进制Count:{{ hexCount }}</h2>
    <hr />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    // 数组语法
    ...mapState(["count"]),
    ...mapGetters(["hexCount"]),
    // 对象语法
    // ...mapState({count:'count'}),
    // ...mapGetters({hexCount:'hexCount'})
  },
};
</script>

<style scoped></style>
