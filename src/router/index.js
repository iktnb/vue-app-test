import Vue from 'vue'
import Router from 'vue-router'

import vUsers from "../components/users/v-users"
import vPosts from "../components/posts/v-posts"
import vPostPage from "../components/posts/v-post-page"
import vNewPost from "../components/posts/v-new-post"

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
        },
        {
            path: '/post',
            name: 'post',
            component: vPostPage
        },
        {
            path: '/createPost',
            name: 'newPost',
            component: vNewPost
        }
    ]
})

export default router