<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
      <div class="col-10 px-2">
        <Header :silderProps="'Hợp đồng'" ></Header>
        <HopDong></HopDong>
      </div>
  
</template>

<script>

import Header from '../components/Admin/Header.vue';
import Sidebar from '../components/Admin/sidebar.vue';
import HopDong from '../components/Admin/HopDong.vue';
import loginServices from "../services/login.services";

export default {
  name: "DSLP",
  components: {Header,Sidebar, HopDong},
  data(){
    return{
      dieuhuong:{hopdong:true},

      quyen:{
        message:'',
      }
    }
  },
  async created() {
    this.quyen= await loginServices.Quyen();
    console.log(this.quyen);
    if(this.quyen.message==='chuadangnhap'){
      this.$router.push({ name: "login" });
    }
    if(this.quyen.message!=='chutro'){
        this.$router.push({ name: "login" });
      }
  },
  
};
</script>

<style></style>
