import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Login from './views/Login.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        meta:{layout:'empty'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes,
})
export default router;