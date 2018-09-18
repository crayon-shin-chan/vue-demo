<template>
  <div>
    <template v-for="item in items">
        <doc-item :key="item.name" :name="item.name" :url="item.url" :git="item.git" :desc="item.desc"></doc-item>
    </template>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import DocItem from './doc.item.vue'

@Component({
    components:{
        DocItem
    },
    data: function(){
        return {
            items:[
                {
                    name:"vue",
                    url:"https://cn.vuejs.org/",
                    git:"https://github.com/vuejs/vue",
                    desc:"🖖 A progressive, incrementally-adoptable JavaScript framework for building UI on the web."
                },
                {
                    name:"vue-router",
                    url:"https://router.vuejs.org/",
                    git:"https://github.com/vuejs/vue-router",
                    desc:"🚦 The official router for Vue.js."
                },
                {
                    name:"vuex",
                    url:"https://vuex.vuejs.org/",
                    git:"https://github.com/vuejs/vuex",
                    desc:"🗃️ Centralized State Management for Vue.js."
                },
                {
                    name:"vue-cli",
                    url:"https://cli.vuejs.org/",
                    git:"https://github.com/vuejs/vue-cli",
                    desc:"🛠️ Standard Tooling for Vue.js Development"
                },
                {
                    name:"vue-devtools",
                    url:"https://github.com/vuejs/vue-devtools",
                    git:"https://github.com/vuejs/vue-devtools",
                    desc:"⚙️ Browser devtools extension for debugging Vue.js applications."
                },
                {
                    name:"class-component",
                    url:"https://github.com/vuejs/vue-class-component",
                    git:"https://github.com/vuejs/vue-class-component",
                    desc:"https://github.com/vuejs/vue-class-component"
                },
                {
                    name:"vue-loader",
                    url:"https://vue-loader.vuejs.org/",
                    git:"https://github.com/vuejs/vue-loader",
                    desc:"📦 Webpack loader for Vue.js components"
                }
            ]
        }
    }
})
export default class Doc extends Vue {
  
}
</script>

<style lang="scss">
</style>