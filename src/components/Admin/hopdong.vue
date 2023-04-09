<template>
 
  <h3 class="text-center mt-5 mb-3">Danh sách hợp đồng</h3>
  <router-link :to="{ name: '' }" >
    <button class="btn btn-primary">+</button>
  </router-link>
  <table class="table table-hover mt-2">
    <thead>
      <tr>
        <th style="width:140px">Mã hợp đồng</th>
        <th scope="col">Khách hàng</th>
        <th scope="col">Tên phòng</th>
        <th scope="col">Ngày bắt đầu</th>
        <th scope="col">Ngày kết thúc</th>
        <th scope="col">Thao tác</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hd in hopdong" :key="hd.mahd">
        <td style="width:140px" class="text-center">{{hd.mahd}}</td>
        <td class="text-left">{{ hd.hoten }}</td>
        <td>{{ hd.tenphong }}</td>
        <td>{{ hd.ngaybd }}</td>
        <td>{{ hd.ngaykt }}</td>

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
</template>
<script>
import hopdongService from "@/services/hopdong.service";
export default {
  name: "HopDong",
  components: [],
  data() {
    return {
      hopdong: {type:Array},
    };
  },
  created() {
    this.layDSHD();
    
  },
  methods: {
    async layDSHD() {
      this.hopdong = await hopdongService.layDSHD();
   
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