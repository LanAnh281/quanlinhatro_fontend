<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Khách hàng'"></Header>

    <h3 class="text-center mt-5 mb-3">Danh sách khách hàng</h3>
    <router-link :to="{ name: 'khachhang.them' }">
      <button class="btn btn-primary">+</button>
    </router-link>
    <table class="table table-hover mt-2">
      <thead>
        <tr>
          <th>Họ tên</th>
          <th scope="col">CCCD</th>
          <th scope="col">Nghề nghiệp</th>
          <th scope="col">Quê quán</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(kh, index) in khachhang">
          <td>{{ kh.hoten }}</td>
          <td class="text-left">{{ kh.cccd }}</td>
          <td>{{ kh.nghenghiep }}</td>
          <td>{{ kh.quequan }}</td>
          <td>
            <router-link :to="{
              name: 'khachhang.chinhsua',
              params: { sotk: kh.STT },
            }">
              <fa icon="edit"></fa>
            </router-link>
            &nbsp;
            <!-- <router-link :to="{ name: '' }"> -->
            <fa icon="trash" class="mr-2 style trash" v-on:click="onDelete(kh.STT)"></fa>
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

import khachhangService from "@/services/khachhang.services";
export default {
  name: "KhachHang",
  components: { Header, Sidebar },
  data() {
    return {
      dieuhuong:{khachhang:true},

      thongbao: { type: Object },
      khachhang: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      this.khachhang = await khachhangService.layDSKH();
    },
    async onDelete(sotk) {
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
            this.thongbao = await khachhangService.xoaKH(sotk);
            this.$swal.fire("Đã xóa!", "", "success");
            this.getAll();
          }
        });
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
