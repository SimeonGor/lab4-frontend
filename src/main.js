import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Checker from "@/components/check/Checker.vue";
import LoginPage from "@/components/LoginPage.vue";
import {createMemoryHistory, createRouter} from "vue-router";
import {getCurrentUser} from "@/auth.service.js";

const routes = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        path: '/check',
        component: Checker,
        meta: { authorized: true }
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authorized = to.meta.authorized;
    const currentUser = getCurrentUser();
    if (authorized) {
        if (!currentUser.expirationDate || currentUser.expirationDate < Date.now()) {
            return next({ path: '/' })
        }
    }

    next();
})

createApp(App).use(router).mount('#app')
