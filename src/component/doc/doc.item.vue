<template>
  <div class="doc-item">
      <div class="left">
          <span><a class="name" :href="url">{{name}}</a></span>
          <span><a class="git" :href="git">GitHub</a></span>
      </div>
      <div class="divide"></div>
      <div class="right">
          <span class="desc">{{desc}}</span>
      </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props:['name','url','git','desc']
})
export default class DocItem extends Vue {
  
}
</script>

<style lang="scss">
body{
  .doc-item{
      margin: 0px 10% 0px 10%;
      width:75%;
      height:60px;
      clear: both;
  }
  .left{
      float: left;
  }
  .divide{
      margin: 0 40px 10% 40px;
      width:1px;
      height:100%;
      background: linear-gradient(to bottom,red, blue);
      float: left;
  }
  .right{
  }
  .name{
      display: block;
      width:120px;
      height:30px;
      border: {
          radius: 5px;
      };
      padding: {
         left: 20px;
      }
      text-decoration: none;
      text-align: left;
      color: black;
      font: {
          size: 20px;
      };
      background: linear-gradient(to left,rgb(0, 255, 0), rgb(0, 255, 149));
  }
  .git{
      display: block;
      margin: 5px 0px 5px 0px;
      width: 50px;
      height: 15px;
      border: {
          radius: 3px;
      };
      text-decoration: none;
      text-align: center;
      color: black;
      font: {
          size: 10px;
      };
      background: linear-gradient(to left,red, blue);
  }
  .desc{
      
  }
}
</style>