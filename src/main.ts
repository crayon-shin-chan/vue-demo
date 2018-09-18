import App from "./component/app.vue"
import Vue from "vue"

/**入口ts文件，构造Vue实例 */
new Vue({
    el: '#app',
    render: h => h(App)
 })