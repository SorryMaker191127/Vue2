<template>
  <div class="helloWorld">
    <p>appMsg:{{ appMsg }}</p>
    <p>appNumber:{{ appNumber }}</p>
  </div>
</template>

<script>
export default {
  //props接收数据
  //一：直接接收
  //props: ["appMsg", "appNumber"],
  //二：类型校验
  // props: {
  //   appMsg: String,
  //   appNumber: Number
  // }
  //三：对象接收，默认值，类型校验，必填
  props: {
    appMsg: {
      type: String,
      default: "默认值",
      required: true
    },
    appNumber: {
      type: Number,
      default: 0,
      required: true
    }
  }
};
</script>

<style scoped></style>
