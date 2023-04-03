import { createWebHistory, createRouter } from "vue-router";
import admin from "@/views/admin.vue";

const routes=[
    {
        path:"/",
        name:"admin",
        component: admin,
    },
];

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;