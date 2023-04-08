<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Nhà Trọ'"></Header>

    <h3 class="text-center mt-5 mb-3">Thông tin nhà trọ</h3>
    <router-link :to="{ name: '' }" class="mr-5" style="float:right">
      <button class="btn btn-primary">Cập nhật</button>
    </router-link>

    <div v-for="(nt, index) in nhatro" :key="index">
      <table class="table " v-for="(nt,index) in nhatro" :key="index">
        <tr>
          <th scope="col">Tên nhà trọ</th>
          <td scope="col">:&nbsp;{{nt.tennhatro}}</td>
        </tr>

        <tr>
          <th scope="col">Họ tên</th>
          <td scope="col">:&nbsp;{{nt.hoten}}</td>
        </tr>
        <tr>
          <th scope="col">SĐT</th>
          <td scope="col">:&nbsp;{{nt.sdt}}</td>
        </tr>
        <tr>
          <th scope="col">Địa chỉ</th>
          <td scope="col">:&nbsp; {{nt.diachi}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import nhatroService from "@/services/nhatro.service";
export default {
  name: "nhatro",
  components: { Header, Sidebar },
  data() {
    return {
      nhatro: { type: Array },
    };
  },
  created() {
    this.TTNT();
  },
  methods: {
    async TTNT() {
      this.nhatro = await nhatroService.layTTNT();
     
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
.table{
    left :35% ;
}
 td,th{
    border: 1px solid white ;
}
th{
    width: 160px;
    font-weight: bold;
}
</style>
