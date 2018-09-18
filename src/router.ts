import VueRouter from 'vue-router'
import Vue from 'vue'

import Doc from './component/doc/doc.vue'

Vue.use(VueRouter);

const router:VueRouter = new VueRouter({
    routes:[
        {
            path:'/',
            component: Doc
        },
        {
            path:'/doc',
            component: Doc
        }
    ]
})

export default router;