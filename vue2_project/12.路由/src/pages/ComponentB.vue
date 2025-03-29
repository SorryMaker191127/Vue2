<template>
  <div class="componentB">
    componentB
    <div class="chidNav">
      <!-- 模版字符串写法 -->
      <router-link
        :to="`/componentB/childBQuery?id=${queryStrId}&msg=${queryStrMessage}`"
        >childB query模版字符串传参</router-link
      >
      <!-- 对象写法 -->
      <router-link
        :to="{
          path: '/ComponentB/childBQuery',
          query: {
            id: queryObjId,
            msg: queryObjMessage,
          },
        }"
        >childB query对象传参</router-link
      >
    </div>
    <div class="chidNav">
      <button @click="pushToChildB">PushToChildB</button>
      <button @click="replaceToChildB">ReplaceToChildB</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryStrId: "Str",
      queryStrMessage: "hello",
      queryObjId: "Obj",
      queryObjMessage: "world",
    };
  },
  methods: {
    pushToChildB() {
      console.log(111);

      this.$router.push({
        path: "/ComponentB/childBQuery",
        query: {
          id: this.queryObjId,
          msg: this.queryObjMessage,
        },
      });
    },
    replaceToChildB() {
      this.$router.replace({
        path: "/ComponentB/childBQuery",
        query: {
          id: this.queryObjId,
          msg: this.queryObjMessage,
        },
      });
    },
  },
};
</script>

<style scoped>
.chidNav {
  width: 100%;
  height: 30px;
  background-color: #5f5f5f;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
