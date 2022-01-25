import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/components/Home.vue";



const routes = [

    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path: "/about/:slug",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../src/components/About.vue")
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;