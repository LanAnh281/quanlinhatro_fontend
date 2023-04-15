<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Hóa đơn'"></Header>
    <h3 class="text-center mt-5 mb-3">Danh sách hóa đơn</h3>
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
          <th scope="col">Trạng thái</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(hd, index) in hoadon">
          <td>{{ hd.mahd }}</td>
          <td class="text-left">{{ hd.thang }}</td>
          <td>{{ hd.nam }}</td>
          <td>{{ hd.phong }}</td>
          <td>{{ hd.tongtien }}</td>
          <td>{{ hd.trangthai }}</td>
          <td>
            <router-link
            :to="{
              name: 'hoadon.chitiet',
              params: { mahd: `${hd.mahd}` },
            }"
          >
            <fa icon="info" class="style info"></fa>
          </router-link>
          &nbsp;
            <router-link
              :to="{
                name: '',
                params: {},
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
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
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
    },
    async onDelete(mahd) {
        let PhieuThu=await phieuthuService.layDSPT();
        let isPhieu= PhieuThu.every((phieu,index)=>{
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
            let message = hoadonService.xoaHD(mahd);
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
