<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Nhà Trọ'"></Header>

    <h3 class="text-center mt-5 mb-4">Thông tin nhà trọ</h3>
    <div class="row">
      <div class="ml-3 col-9">
        <label>Tên nhà trọ</label><span>: &nbsp;{{ nhatro.tennhatro }}</span>
        <br />
        <label>SĐT</label><span>: &nbsp;{{ nhatro.sdt }}</span
        ><br />
        <label>Địa chỉ</label><span>: &nbsp;{{ nhatro.diachi }}</span
        ><br />
      </div>
      
        <router-link :to="{ name: 'nhatro.chinhsua' }" class="col-2" >
          <button class="btn btn-primary ">Cập nhật</button>
        </router-link>

      

    </div>
<h4 class="text-center my-4">Bảng Giá</h4>
    <table class="table mx-3 text-center">
      
      <thead>
        <th>Nội dung</th>
        <th>Đơn vị</th>
        <th>Đơn giá (VND)</th>
      </thead>
      <tbody>
       
        <tr>
          <th>Tiền Điện</th>
          <td>kWh</td>
          <td>{{diennuoc.giadien}}</td>
        </tr>
        <tr>
          <th>Tiền Nước</th>
          <td>m³</td>
          <td>{{diennuoc.gianuoc}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import nhatroService from "@/services/nhatro.service";
import diennuocService from "../../services/giadiennuoc.services";
export default {
  name: "nhatro",
  components: { Header, Sidebar },
  data() {
    return {
      dieuhuong:{nhatro:true},

      nhatro: { type: Array },
      diennuoc:{type:Object}
    };
  },
  created() {
    this.TTNT();
    this.layDN();
  },
  methods: {
    async TTNT() {
      this.nhatro = await nhatroService.layTTNT();
      this.nhatro = this.nhatro[0];
    },
    async layDN(){
      this.diennuoc=await diennuocService.layGDN();
      this.diennuoc=this.diennuoc[this.diennuoc.length-1];
    }
  },
};
</script>

<style scoped>
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
label {
  width: 140px;
  font-weight: 600;
}
table {
  display: table;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border: 1px solid black !important;
  border-collapse: collapse;
}
th {
  border: 1px solid black !important;
  font-weight: bold;
}
td {
  border: 1px solid black;
}
</style>
