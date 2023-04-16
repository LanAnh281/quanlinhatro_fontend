import { createWebHistory, createRouter } from "vue-router";
import admin from "@/views/admin.vue";
const routes=[
    
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
    //doi mat khau
    {
        path:"/doimatkhau",
        name:"doimatkhau",
        component:()=>import('../components/Admin/DoiMatKhau.vue'),  
    },
    //them họp đồng
    {
        path:"/hopdong/them",
        name:"hopdong.them",
        component:()=>import('../components/Admin/AddHopDong.vue'),  
    },
    //chinh sua hop dong
    {
        path:"/hopdong/chinhsua/:mahd",
        name:"hopdong.chinhsua",
        component:()=>import('../components/Admin/AddHopDong.vue'),  
    },
    //khách hàng
    {
        path:"/khachhang",
        name:"khachhang",
        component:()=>import('../components/Admin/KhachHang.vue'),
    },
    {
        path:"/khachhang/in/:STT",
        name:"khachhang.in",
        component:()=>import('../components/Admin/Print.vue'),
    },
    {
        path:"/khachhang/them",
        name:"khachhang.them",
        component:()=>import('../components/Admin/AddKhachHang.vue'),
        
    },
    {
        path:"/khachhang/chinhsua/:sotk",
        name:"khachhang.chinhsua",
        component:()=>import('../components/Admin/AddKhachHang.vue'),
        
    },
    //hóa đơn
    {
        path:"/hoadon/:mahd",
        name:"hoadon.chitiet",
        component:()=>import('../components/Admin/PhieuThu.vue'),
        
    },

    //nha trọ
    {
        path:"/nhatro",
        name:"nhatro",
        component:()=>import('../components/Admin/NhaTro.vue'),
        
    },
    //phiếu gia hạn
    {
        path:"/phieugiahan",
        name:"phieugiahan",
        component:()=>import('../components/Admin/PhieuGiaHan.vue'),
    },
    {
        path:"/hoadon",
        name:"hoadon",
        component:()=>import('../components/Admin/HoaDon.vue'),
    },
    {
        path:"/hoadon/them",
        name:"hoadon.them",
        component:()=>import('../components/Admin/AddHoaDon.vue'),
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
        path:"/phong/them/:maloai",
        name:"phong.them",
        component:()=>import('../components/Admin/AddPhong.vue'),
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