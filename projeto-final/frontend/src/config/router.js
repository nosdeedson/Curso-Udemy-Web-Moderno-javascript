import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../components/home/Home';
import AdminPages from '../components/admin/AdminPages.vue';
import articlesByCategory from '../components/article/ArticlesByCategoryId'
import articleId from '../components/article/ArticleById'
import Auth from '../components/auth/Auth'

import {userKey} from '@/global'

Vue.use(VueRouter)

const routes = [
    {
        name: 'admin',
        path: '/admin',
        component: AdminPages,
        meta: { requiresAdmin: true}
    },
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'articles',
        path: '/categories/:id/articles',
        component: articlesByCategory
    },
    {
        name: 'articleById',
        path: '/articles/:id',
        component: articleId
    },{
        name: 'auth',
        path: '/auth',
        component: Auth
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next ) =>{
    const json = localStorage.getItem(userKey)

    if( to.matched.some(record => record.meta.requiresAdmin)){
        const user = JSON.parse(json)
        user && user.admin ? next() : next({path : '/'})
    }else{
        next()
    }
})

export default router

