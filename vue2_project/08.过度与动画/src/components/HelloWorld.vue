<template>
  <div class="helloWorld">
    <!-- 默认动画 'v-'开头-->
    <h2>动画</h2>
    <Transition>
      <div class="box" v-show="defaultIsShow"></div>
    </Transition>
    <br />
    <!-- 命名动画，'name'属性开头,用来区分多个动画。appear并立即执行动画 -->
    <Transition name="animation" appear>
      <div class="box" v-show="defaultIsShow"></div>
    </Transition>
    <br />
    <hr />
    <!-- 过度效果 -->
    <h2>过度</h2>
    <Transition name="transform" appear>
      <div class="box" v-show="defaultIsShow"></div>
    </Transition>
    <br />
    <!-- 组动画 每个子元素需要添加key属性-->
    <h2>组动画</h2>
    <Transition-group name="animation" appear>
      <div class="box green" v-show="defaultIsShow" key="1"></div>
      <div class="box blue" v-show="!defaultIsShow" key="2"></div>
    </Transition-group>
    <hr />
    <button @click="defaultIsShow = !defaultIsShow">动画切换</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultIsShow: true,
    };
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

/* 动画 */
.v-enter-active {
  animation: defaultShowHide 1.5s linear;
}

.v-leave-active {
  animation: defaultShowHide 1.5s reverse;
}

/* 自命名动画 */
.animation-enter-active {
  animation: customShowHide 1.5s linear;
}

.animation-leave-active {
  animation: customShowHide 1.5s reverse;
}

@keyframes customShowHide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes defaultShowHide {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
}

/* 过度 */
/* 进入的起点和离开的终点 */
.transform-enter,
.transform-leave-to {
  transform: translateY(-100%);
}

/* 进入的终点和离开的起点 */
.transform-enter-to,
.transform-leave {
  transform: translateY(0);
}

/* 过度动画 */
.transform-enter-active,
.transform-leave-active {
  transition: 1.5s linear;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}
</style>
