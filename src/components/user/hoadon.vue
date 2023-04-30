<template>
        <div class="col-12">
            <userHeader></userHeader>
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
                          <form @submit.prevent="thanhtoan">
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
export default{
    name: "hoadon",
    components: { userHeader, userFooter },

  data() {
    return {
      hoadon: {type: Object},
      khachhang:{type:Object},
      hopdong:{type:Object}
    };
  },
  async created() {
   await this.layHopDong();
   await this.layHDK();

  },
  methods: {
    async layKH (){
        this.khachhang= await khachhangServices.layKT();
    },
    async layHopDong(){
        this.hopdong= await hopdongServices.layHDK();
    },
    async layHDK(){
        this.hoadon= await hoadonServices.layHD(this.hopdong.maphong);
        // this.hoadon= this.hoadon.filter((hd,index)=>{
        //     return (hd.maphong===this.kh)
        // })
    },
    async thanhtoan(){
      // console.log('hi');
      let a=await paypalService.hienTT()
      console.log(a);
     var url=await paypalService.taoTT();
     console.log(url)
     window.location=url;
    }
   
  },

}
</script>