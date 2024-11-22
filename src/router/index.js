// src/routes/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import UserPage from '@/views/UserPage.vue';
import UserProductsPage from '@/views/UserProductsPage.vue';
import ProductCreatePage from '@/views/ProductCreatePage.vue';
import ProductPage from '@/views/ProductPage.vue';
import ForeignUser from '@/views/ForeignUser.vue';
import ForeignUsers from "@/views/ForeignUsers.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { hideHeaderFooter: true, requiresAuth: false }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { requiresAuth: false }
    },
    {
        path: '/user',
        name: 'User',
        component: UserPage,
    },
    {
      path: '/user/:id/products',
      name: 'UserProducts',
      component: UserProductsPage,
      props: true,
      meta: { requiresAuth: false }
    },
    // {
    //   path: '/user/products',
    //   name: 'UserOwnProducts',
    //   component: UserProductsPage
    //
    // },
    {
        path: '/user/createproduct',
        name: 'CreateProduct',
        component: ProductCreatePage
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: ProductPage,
        props: true,
        meta: { requiresAuth: false }
    },
    {
        path: '/user/:id',
        name: 'ForeignUser',
        component: ForeignUser,
        props: true,
        meta: { requiresAuth: false }
    },
    {
        path: '/users',
        name: 'Users',
        component: ForeignUsers,
        meta: { requiresAuth: false }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;