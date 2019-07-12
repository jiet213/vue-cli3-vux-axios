<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="less">
@import "./assets/less/common/common.main.less";

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>