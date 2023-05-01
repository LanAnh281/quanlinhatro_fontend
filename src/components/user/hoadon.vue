<template>
        <div class="col-12">
          <userHeader :headerProps="dieuhuong" class="mb-3"></userHeader>
          <div class="text-center my-5 pb-5">
                <h1 class="mb-5">Hóa đơn của bạn</h1>
                <table class="table table-hover mt-2">
                    <thead>
                      <tr>
                        <th scope="col">Mã hóa đơn</th>
                        <th scope="col">Tháng</th>
                        <th scope="col">Năm</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col"> Thanh toán Paypal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="index" v-for="(hd,index) in hoadon">
                        <td>{{ hd.mahd }}</td>
                        <td>{{ hd.thang }}</td>
                        <td>{{ hd.nam }}</td>
                        <td>{{ hd.tongtien }}</td>
                        <td>
                          <!-- <fa :icon="['fab','trash']"></fa> -->
                          <form @submit.prevent="thanhtoan(hd.tongtien,hd.mahd)">
                            <button class="btn btn-primary">Thanh toán</button>
                        </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
            <userFooter class="mt-5"></userFooter>
        </div>        
</template>
<script>
import userHeader from "./userHeader.vue";
import userFooter from "./userfooter.vue";
import hoadonServices from "../../services/hoadon.services";
import paypalService from '../../services/paypal.service';
import khachhangServices from "../../services/khachhang.services";
import hopdongServices from '../../services/hopdong.service';
import phieuthuService from '../../services/phieuthu.services';
export default{
    name: "hoadon",
    components: { userHeader, userFooter },

  data() {
    return {
      dieuhuong:{hoadon:true},
      hoadon: {type: Object},
      khachhang:{type:Object},
      hopdong:{type:Object}
    };
  },
  async created() {
    await this.layHDKH();
    await this.dathanhtoan();
  },
  methods: {
    
    async layKH (){
        this.khachhang= await khachhangServices.layKT();
    },
    async layHopDong(){
        this.hopdong= await hopdongServices.layHDK();
    },
    async layHDKH(){
        await this.layHopDong();
        
        let phong= {maphong:this.hopdong.maphong};
        
        this.hoadon= await hoadonServices.layDSHD();
       
        this.hoadon=this.hoadon.filter((hd,index)=>{
          return (hd.maphong==this.hopdong.maphong && hd.trangthai=='chưa thanh toán');
        })
        

    },
    async thanhtoan(tongtien,mahd){
      
      let a=await paypalService.hienTT()
      let thanhtoan={tongtien:tongtien, mahd:mahd}
     var url=await paypalService.taoTT(thanhtoan);
    //  console.log(url)
     window.location=url;
    },
    async dathanhtoan(){
      if(this.$route.query.trangthai){
        
        let tt= await phieuthuService.themPT(this.$route.query.mahd);
        var hdon= await hoadonServices.layHD(this.$route.query.mahd);
        hdon=hdon[0];
        hdon['trangthai']="Đã thanh toán";
        let mes = await hoadonServices.chinhsuaHD(this.$route.query.mahd,hdon);
        await this.layHDKH();
        return;
      }
      
      
    }
   
  },

}
</script>
<style scoped>

</style>