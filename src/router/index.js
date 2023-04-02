import { createWebHistory, createRouter } from "vue-router";
import loaiPhong from "@/views/loaiPhong.vue";

const routes=[
    {
        path:"/",
        name:"loaiphong",
        component: loaiPhong,
    },
];

const router=createRouter({
    history: createRouter(import.meta.env.BASE_URL),
    routes,
});

export default router;