<template >
    <div class="border col-12">
        <div class="p-3 ">
            <h5>Tên &nbsp;{{ nhatro.tennhatro }}</h5>
            <h5>SĐT &nbsp; {{ nhatro.sdt }}</h5>
            <h5>Địa chỉ  &nbsp;{{ nhatro.diachi }}</h5>
          
        </div>
        <div class="text-center p-3 my-3 col-12 row justify-content-center">
            <div class="col-6">
                <h3 class="my-3">Tài khoản</h3>
                <p>Họ tên:  {{ khachhang.hoten }}</p>
                <p>Mã tài khoản:  {{ khachhang.matk }}</p>
                <p>Mật khẩu: {{taikhoan.mk}}</p>
            </div>
        </div>

    </div>
</template>
<script>
import taikhoanService from '../../services/taikhoan.service';
import khachhangServices from '../../services/khachhang.services';
import nhatroService  from '../../services/nhatro.service';
export default{
    name:"in",
    data(){
        return {
            nhatro:{type:Object},
            khachhang:{type:Object},
            taikhoan:{type:Object}
        }
    },
    async created(){
        await this.layTK();
        
        console.log(this.khachhang);
        window.print();
    },
    methods:{
        async layTK (){
            this.nhatro=await nhatroService.layTTNT();
            this.nhatro=this.nhatro[0];
            this.taikhoan=await taikhoanService.layTK(this.$route.params.STT);
            this.khachhang= await khachhangServices.layKH(this.$route.params.STT);
            this.taikhoan=this.taikhoan[0];
            
        }
    }

}
</script>
