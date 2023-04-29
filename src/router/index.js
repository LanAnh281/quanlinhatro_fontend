import { createWebHistory, createRouter } from "vue-router";
import admin from "@/views/admin.vue";
const routes=[
    
//Thống kê điện nước
    {
        path:"/chartTK/:nam",
        name:"chartTK",
        component: ()=>import('../components/Admin/TKDN.vue'),
    },
    {
        path:"/chartTT/:nam",
        name:"chartTT",
        component: ()=>import('../components/Admin/TienTro.vue'),
    },

    {
        path:"/",
        name:"login",
        component: ()=>import('../components/login.vue'),
    },
    {
        path:"/thongke",
        name:"thongke",
        component: ()=>import('../components/Admin/thongke.vue'),
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
        path:"/phieuthu/:mahd",
        name:"phieuthu.chitiet",
        component:()=>import('../components/Admin/PhieuThu.vue'),
        
    },
    {
        path:"/phieuthu/:mahd",
        name:"phieuthu.them",
        component:()=>import('../components/Admin/AddPhieuThu.vue'),
        
    },

    //nha trọ
    {
        path:"/nhatro",
        name:"nhatro",
        component:()=>import('../components/Admin/NhaTro.vue'),
        
    },
    {
        path:"/nhatro/chinhsua",
        name:"nhatro.chinhsua",
        component:()=>import('../components/Admin/Update.vue'),
        
    },
    //phiếu gia hạn
    {
        path:"/phieugiahan",
        name:"phieugiahan",
        component:()=>import('../components/Admin/PhieuGiaHan.vue'),
    },
    //hóa đơn
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
    {
        path:"/hoadon/chinhsua/:mahd",
        name:"hoadon.chinhsua",
        component:()=>import('../components/Admin/AddHoaDon.vue'),
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
   
    

//USER

{
    path:"/user",
    name:"user",
    component: ()=>import('../views/user.vue'),
},
//doi mat khau user
    {
        path:"/user/doimatkhau",
        name:"userdoimatkhau",
        component:()=>import('../components/User/UserDoiMatKhau.vue'),          // props:true
    },
    // cá nhân
    {
        path:"/user/canhan",
        name:"canhan",
        component:()=>import('../components/User/user.vue'),          // props:true
    },
    


];

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;