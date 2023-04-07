import { createWebHistory, createRouter } from "vue-router";
import admin from "@/views/admin.vue";
import edit from "../components/Admin/edit.vue";
import loaiphong from "../components/Admin/RomType.vue";
import hopdong from "../components/Admin/hopdong.vue";
const routes=[
    {
        path:"/",
        name:"admin",
        component: admin,loaiphong,
    },
    {
        path:"/loaiphong/them",
        name:"loaiphong.them",
        component:()=>import('../components/Admin/AddRoomType.vue'),
    },
    {
        path:"/loaiphong/chinhsua/:maloai",
        name:"loaiphong.chinhsua",
        component:()=>import('../components/Admin/AddRoomType.vue'),
        // props:true
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