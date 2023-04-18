<template>
    <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Phiếu thu'"></Header>
    <h4 class="text-center mt-5 mb-3">Phiếu Thu</h4>

    <table class="table table-hover mt-2 m-5 text-center">
        <thead>
          <tr>
            <th scope="col">Mã hóa đơn</th>
            <th scope="col">Mã phiếu thu</th>
            <th scope="col">Ngày thu</th>
            
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(pt, index) in phieuthu">
            <td>{{ pt.mahd }}</td>
            <td >{{ pt.mapt }}</td>
            <td>{{ pt.ngaythu }}</td>
           
            
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
   import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import phieuthuService from "@/services/phieuthu.services";

export default {
  name: "phieuthu",
  components: { Header, Sidebar },

  data() {
    return {
      hoadon: { type: Object },
      phieuthu:{type:Object}
    };
  },
  async created (){
   await this.layPT();
  },
  methods:{
   async layPT(){
    this.phieuthu=await phieuthuService.layPT(this.$route.params.mahd);
    console.log(this.phieuthu);

    }
  }
} 
</script>
<style scoped>
table {
  border:1px solid black;
}
th{
  border:1px solid black !important;

}
td{
  border:1px solid black;

}

</style>
