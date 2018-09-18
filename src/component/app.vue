<!-- vue组件模板，渲染组件时替换使用 -->
<template>
  <div>
    Hello,World
  </div>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {
  
}
</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">
body{
  background: {
        color: rgb(17, 194, 185);
  }
}
</style>