import App from './component/app.vue'
import Vue from "vue"

import router from './router'

/**入口ts文件，构造Vue实例 */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
 })