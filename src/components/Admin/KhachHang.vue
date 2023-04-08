<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header></Header>

    <h3 class="text-center mt-5 mb-3">Danh sách khách hàng</h3>
    <router-link :to="{ name: '' }" >
        <button class="btn btn-primary">+</button>
      </router-link>
    <table class="table mt-2">
      <thead>
        <tr>
          <th style="width: 140px">Họ tên</th>
          <th scope="col">CCCD</th>
          <th scope="col">Nghề nghiệp</th>
          <th scope="col">Quê quán</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(kh, index) in khachhang">
          <td style="width: 140px" class="text-center">{{ kh.hoten }}</td>
          <td class="text-left">{{ kh.cccd }}</td>
          <td>{{ kh.quequan }}</td>
          <td>{{ kh.nghenghiep }}</td>

          <td>
            <!-- <fa :icon="['fab','trash']"></fa> -->
            <router-link :to="{ name: '' }" class="mr-2">
              <fa icon="info" class="style info"></fa>
            </router-link>
            <router-link :to="{ name: '' }" class="mr-2">
              <fa icon="edit"></fa>
            </router-link>
            <fa icon="trash" class="mr-2 style trash"></fa>
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
      khachhang: { type: Array },
    };
  },
  created() {
    this.layDSKH();
  },
  methods: {
    async layDSKH() {
      this.khachhang = await khachhangService.layDSKH();
      
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
