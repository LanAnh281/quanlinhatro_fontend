import { createWebHistory, createRouter } from "vue-router";
import admin from "@/views/admin.vue";
const routes=[
    //login
    {
        path:"/",
        name:"login",
        component: ()=>import('../components/login.vue'),
    },
    //admin
    {
        path:"/admin",
        name:"admin",
        component:admin,
        
    },
    {
        path:"/khachhang",
        name:"khachhang",
        component:()=>import('../components/Admin/KhachHang.vue'),
        
    },
    {
        path:"/nhatro",
        name:"nhatro",
        component:()=>import('../components/Admin/NhaTro.vue'),
        
    },
    //user
    {
        path:"/user",
        name:"user",
        component: ()=>import('../components/user/userHeader.vue'),
    },
    //loaiphong admin
    {
        path:"/loaiphong",
        name:"loaiphong",
        component:()=>import('../components/Admin/RoomType.vue'),
    },
    {
        path:"/loaiphong/chitiet/:maloai",
        name:"loaiphong.chitiet",
        component:()=>import('../components/Admin/RoomTypeDetail.vue'),
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
];

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;