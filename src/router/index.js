import Vue from 'vue'
import Router from 'vue-router'

import vUsers from "../components/users/v-users"
import vPosts from "../components/posts/v-posts"

Vue.use(Router)

const router = new Router( {
    routes: [
        {
            path: '/posts',
            name: 'global',
            component: vPosts
        },
        {
            path: '/userList',
            name: 'Users',
            component: vUsers
        }
    ]
})

export default router