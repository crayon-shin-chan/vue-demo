<!-- vue组件模板，渲染组件时替换使用 -->
<template>
  <div>
    <div class="header-container">
      <router-link to="/doc" class="link">文档</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<!-- vue组件脚本，使用ts语言，包含组件类 -->
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import Doc from './doc/doc.vue'

@Component({
  components:{
    Doc
  }
})
export default class App extends Vue {
  
}
</script>

<!-- vue组件样式，使用scss -->
<style lang="scss">

  .header-container{
    height:50px;
    width:100%;
    margin:20px 0px 20px 0px;
    background: {
      color: rgb(61, 167, 216)
    }
  }

  .link{
    display: inline-block;
    width:100px;
    line-height: 30px;
    margin: 10px 30px 10px 30px;
    border: {
      radius: 5px
    };
    text-decoration: none;
    text-align: center;
    color: black;
    font: {
      size: 15px;
    };
    background: {
      color: rgb(91, 91, 172);
    }
  }

</style>