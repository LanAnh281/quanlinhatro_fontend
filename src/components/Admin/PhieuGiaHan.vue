<template>
    <Sidebar class="col-2 px-0"></Sidebar>
    <div class="col-10 px-2">
      <Header :silderProps="'Phiếu gia hạn'"></Header>
  
      <h3 class="text-center mt-5 mb-3">Danh sách phiếu gia hạn</h3>
      <router-link :to="{ name: '' }" >
          <button class="btn btn-primary">+</button>
        </router-link>
      <table class="table mt-2">
        <thead>
          <tr>
            <th style="width: 140px">Mã phiếu  </th>
            <th scope="col">Họ tên</th>
            <th scope="col">Ngày bắt đầu</th>
            <th scope="col">Ngày kết thúc</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Xử lý</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(p, index) in phieu">
            <td style="width: 140px" >{{ p.maphieu }}</td>
            <td class="text-left">{{ p.hoten }}</td>
            <td>{{ p.ngaybd }}</td>
            <td>{{ p.ngaykt}}</td>
            <td>{{ p.trangthai}}</td>
            <td class="text-center" >
                <fa v-if="p.trangthai=='Chưa xử lý'" @click="toggle(p.maphieu)" icon="toggle-off"></fa>
                <fa v-if="p.trangthai=='Đã xử lý'" icon="toggle-on"></fa>

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
        phieu: { type: Array },
      };
    },
    created() {
      this.DSP();
    },
    methods: {
      async DSP() {
        this.phieu = await phieugiahanService.layDSP();
        this.phieu.map((item)=>{
            if(item.trangthai=='0'){
                item.trangthai='Chưa xử lý';
            }
            else item.trangthai='Đã xử lý';

        })
        
      },
      async toggle(maphieu){
        console.log('cap nhat tt');
        await phieugiahanService.chinhsuaTT(maphieu);
      }
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
  