import { createWebHistory, createRouter } from "vue-router";
import admin from "@/views/admin.vue";
import edit from "@/views/edit.vue";
import loaiphong from "../components/Admin/RomType.vue";
import hopdong from "../components/Admin/hopdong.vue";
const routes=[
    {
        path:"/",
        name:"admin",
        component: admin,loaiphong,
    },
    {
        path:"/edit",
        name:"edit",
        component:edit,
    },
    {
        path:"/loaiphong",
        name:"loaiphong",
        component:loaiphong,
    },
    {
        path:"/hopdong",
        name:"hopdong",
        component:hopdong,
    },
    


];

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;