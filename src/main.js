import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Checker from "@/components/check/Checker.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import {getCurrentUser} from "@/auth.service.js";
import AuthPage from "@/components/authentication/AuthPage.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    {
        path: '/',
        component: AuthPage,
    },
    {
        path: '/check',
        component: Checker,
        meta: { authorized: true }
    },
    {
        path: '/*',
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const { authorized } = to.meta;
    const { expirationDate } = getCurrentUser();
    if (authorized) {
        if (!expirationDate || expirationDate < Date.now()) {
            return next({ path: '/' })
        }
    }

    next();
})

createApp(App).use(router).mount('#app')
