<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Hóa đơn'"></Header>
    <h3 class="text-center mt-5 mb-3">Danh sách hóa đơn </h3>
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
          <th scope="col">Thao tác</th>
          <th scope="col">Tạo phiếu thu</th>
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
          <td>
           
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
          </td>
          <td class="text-center">
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
</template>
<script>
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
      hoadon: { type: Object },
    };
  },
  created() {
    this.layDSHD();
  },
  methods: {
    async layDSHD() {
      this.hoadon = await hoadonService.layDSHD();
      console.log(this.hoadon.length);
     
      this.hoadon= this.hoadon.filter(async (h,index)=>{
        
        let phong = await phongService.layPhong(h.maphong);
        this.hoadon[index].tenphong=phong[0].tenphong;
      
      })
      console.log(this.hoadon);
      
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
            console.log(message);
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
    
  },
};
</script>
<style scoped>

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
