<template>
  <div class="helloWorld">
    <div class="box_red" v-resize="resizeNumber"></div>
    <br />
    <button @click="changeResizeNumber">改变宽度</button>
    <hr />
    <div class="box_yellow size_100 center">
      <div class="box_blue size_50" v-border-radius="radiusNuber"></div>
    </div>
    <br />
    <button @click="changeRadiusNumber">改变宽度</button>
    <hr />
    <div class="box" v-randomColor="1000"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resizeNumber: 100,
      radiusNuber: 10,
    };
  },
  methods: {
    changeResizeNumber() {
      this.resizeNumber += 1;
    },
    changeRadiusNumber() {
      this.radiusNuber += 2;
    },
  },
  //自定义指令(局部)
  directives: {
    //定义指令名称，多个单词中间用-连接
    resize: function (element, bingding) {
      // 接收两个参数，第一个是绑定的元素，第二个是绑定的对象
      element.style.width = element.style.height = bingding.value + "px";
    },

    //对象模式创建自定义指令
    "border-radius": {
      //绑定时调用
      bind: function (element, bingding) {
        element.style.borderRadius = bingding.value + "px";
      },
      //插入时调用
      inserted: function (element, bingding) {
        //在这里元素才实际渲染到页面，才能访问真实的父节点等
        element.style.borderRadius = bingding.value + "px";
        element.parentNode.style.border = "2px solid green";
      },
      //更新时调用
      update: function (element, bingding) {
        element.style.borderRadius = bingding.value + "px";
        element.parentNode.style.borderRadius = bingding.value / 2 + "px";
      },
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.box_red {
  background-color: red;
}
.box_yellow {
  background-color: yellow;
}
.box_blue {
  background-color: blue;
}
.size_100 {
  width: 100px;
  height: 100px;
}
.size_50 {
  width: 50px;
  height: 50px;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
