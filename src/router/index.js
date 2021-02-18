import Vue from 'vue'
import Router from 'vue-router'

import vUsers from "../components/users/v-users"

Vue.use(Router)

const router = new Router( {
    routes: [
        {
            path: '/',
            component: vUsers
        }
    ]
})

export default router