import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        posts: []
        
    },
    actions: {
        GET_USERS_FROM_API({commit}) {
            return axios('https://jsonplaceholder.typicode.com/users', {
                method: "GET"
            })
            .then((response) => {
                commit('SET_USERS_TO_VUEX', response.data)
            })
        },
        GET_POSTS_FROM_API({commit}) {
            return axios('https://jsonplaceholder.typicode.com/posts', {
                method: "GET"
            })
            .then((response) => {
                commit('SET_POSTS_TO_VUEX', response.data)
            })
        }
    },
    mutations: {
        SET_USERS_TO_VUEX: (state, users) => {
            state.users = users
        },
        SET_POSTS_TO_VUEX: (state, posts) => {
            state.posts = posts
        }
    },
    getters: {
        USERS(state) {
            return state.users;
        },
        POSTS(state) {
            return state.posts;
        }
    }

})

export default store;