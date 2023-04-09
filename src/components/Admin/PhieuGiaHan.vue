<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Phiếu gia hạn'"></Header>

    <h3 class="text-center mt-5 mb-3">Danh sách phiếu gia hạn</h3>
    <table class="table table-hover mt-2">
      <thead>
        <tr>
          <th style="width: 140px">Mã phiếu</th>
          <th scope="col">Họ tên</th>
          <th scope="col">Ngày bắt đầu</th>
          <th scope="col">Ngày kết thúc</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Xử lý</th>
        </tr>
      </thead>
      <tbody>
        
          <tr :key="index" v-for="(p, index) in phieu">
            <td style="width: 140px" name="maphieu">{{ p.maphieu }}</td>
            <td class="text-left">{{ p.hoten }}</td>
            <td>{{ p.ngaybd }}</td>
            <td>{{ p.ngaykt }}</td>
            <td>{{ p.trangthai }}</td>
            <td class="text-center">
              <form @submit.prevent="toggle(p.maphieu)"> 
                <input type="text" name="maphieu" :value="`${p.maphieu}`" >
                <button class="btn btn-primary">Cập nhật</button>
              </form>
            </td>
          </tr>
        
        
      </tbody>
    </table>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import phieugiahanService from "@/services/phieugiahan.services";
export default {
  name: "PhieuGiaHan",
  components: { Header, Sidebar },
  data() {
    return {
      capnhatphieu:{maphieu:''},
      phieu: { type: Array },
    };
  },
  created() {
    this.DSP();
  },
  methods: {
    async DSP() {
      this.phieu = await phieugiahanService.layDSP();
      this.phieu.map((item) => {
        if (item.trangthai == "0") {
          item.trangthai = "Chưa xử lý";
        } else item.trangthai = "Đã xử lý";
      });
    },
    async toggle(ID) {
      console.log('cap nhat');
     this.capnhatphieu.maphieu=ID;
    
      await phieugiahanService.chinhsuaTT(this.capnhatphieu);
      this.$swal.fire({
            title: "Phiếu gia hạn đã được xác nhận",
            confirmButtonText: "OK",
          });
      await this.DSP();
      
    },
  },
};
</script>

<style scoped>
input{
  display: none;
}
input .btn{
    width: 10px !important;
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
