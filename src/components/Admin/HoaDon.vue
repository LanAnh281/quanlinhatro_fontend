<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Hóa đơn'"></Header>
    <button class="btn btn-primary mx-3" @click="chuathanhtoan" :class="{isPay:thanhtoan.name=='chưa thanh toán'}">Chưa thanh toán</button>
    <button class="btn btn-primary" @click="dathanhtoan"  :class="{isPay:thanhtoan.name=='đã thanh toán'}">Đã thanh toán</button>

    <div>
      <h3 class="text-center mt-5 mb-3">Danh sách hóa đơn {{thanhtoan.name}}</h3>
      <router-link :to="{ name: 'hoadon.them' }">
        <button class="btn btn-primary">+</button>
      </router-link>
      <table class="table table-hover mt-2">
        <thead>
          <tr>
            <th>Mã hóa đơn</th>
            <th scope="col">Tháng</th>
            <th scope="col">Năm</th>
            <th scope="col">Phòng</th>
            <th scope="col">Tổng tiền</th>
            <!-- <th scope="col">Trạng thái</th> -->
            <th scope="col" v-if="thanhtoan.name==='chưa thanh toán' ">Thao tác</th>
            <th scope="col" class="text-center" v-if="thanhtoan.name==='chưa thanh toán'">Phiếu thu</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(hd, index) in hoadon">
            <td>{{ hd.mahd }}</td>
            <td class="text-left">{{ hd.thang }}</td>
            <td>{{ hd.nam }}</td>
            <td >{{ hd.tenphong }} </td>
            <td>{{ hd.tongtien }}</td>
            <!-- <td>{{ hd.trangthai }}</td> -->
            <td v-if="thanhtoan.name==='chưa thanh toán'">
            &nbsp;
              <router-link
                :to="{
                  name: 'hoadon.chinhsua',
                  params: {mahd:`${hd.mahd}`},
                }"
              >
                <fa icon="edit"></fa>
              </router-link>
              &nbsp;
              <!-- <router-link :to="{ name: '' }"> -->
              <fa
                icon="trash"
                class="mr-2 style trash"
                v-on:click="onDelete(hd.mahd)"
              ></fa>
              <!-- </router-link> -->
            </td >
            <td class="text-center" v-if="thanhtoan.name==='chưa thanh toán'">
              <router-link
              :to="{
                name: 'phieuthu.chitiet',
                params: { mahd: `${hd.mahd}` },
              }"
            >
              <fa icon="info" class="style info"></fa>
            </router-link>
            &nbsp;
              <router-link :to="{ name: 'phieuthu.them',params:{mahd:`${hd.mahd}`} }">
                <fa
                icon="plus"
              ></fa>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { h } from "vue";
import phongService from "../../services/phong.service";
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import hoadonService from "@/services/hoadon.services";
import phieuthuService from "@/services/phieuthu.services";

export default {
  name: "hoadon",
  components: { Header, Sidebar },

  data() {
    return {
      dieuhuong:{hoadon:true},

      hoadon: { type: Object },
      thanhtoan:{
        name:"",
      }
    };
  },
  created(){
    this.thanhtoan.name="chưa thanh toán",
    this.layDSHD();
  },
  methods: {
    async layDSHD() {
      this.hoadon = await hoadonService.layDSHD();
      if(this.thanhtoan.name==='đã thanh toán')
      this.hoadon=this.hoadon.filter((hd)=>hd.trangthai==='Đã thanh toán')
      else {
        this.hoadon=this.hoadon.filter((hd)=>hd.trangthai==='Chưa thanh toán')
      }
      this.hoadon= this.hoadon.filter(async (h,index)=>{
        
        let phong = await phongService.layPhong(h.maphong);
        this.hoadon[index].tenphong=phong[0].tenphong;
      
      })
   
    },
   
    async onDelete(mahd) {
        let PhieuThu=await phieuthuService.layDSPT();
        let isPhieu=  PhieuThu.every((phieu,index)=>{
            return phieu.mahd!=mahd;
        })
    if(isPhieu){
      this.$swal
        .fire({
          title: "Bạn có muốn xóa ?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            let message = await hoadonService.xoaHD(mahd);
            // console.log(message);
            this.$swal.fire("Đã xóa!", "", "success");
            this.layDSHD();
          }
        });
    }
    else{
        this.$swal
        .fire({
          title: "Phiếu thu của hóa đơn này đã được lập, bạn không thể xóa",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
    }
    },
    chuathanhtoan(){
      this.thanhtoan.name="chưa thanh toán"
      this.layDSHD();
    },
    dathanhtoan(){
      this.thanhtoan.name="đã thanh toán";
      this.layDSHD();

    }
  },
  
};
</script>
<style scoped>
.an{
display: none;
}
.isPay{

  background-color: #5c1ad9;
}
a:hover{
  background-color: transparent;

}
.style {
  padding: 1px;
  width: 16px;
  color: white;
  border-radius: 15px;
}

.info {
  background-color: rgb(93, 42, 245);
}

.trash {
  color: red;
}
</style>
