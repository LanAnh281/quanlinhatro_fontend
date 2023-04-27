<template>
        <div class="col-12 ">
          <userHeader></userHeader>
          <slider class="col-12"></slider>

        </div>
    
  </template>
  
  <script>
  
  import userHeader from '../components/user/userHeader.vue';
  import loginServices from "../services/login.services";
  import slider from  '../components/user/slider.vue';

  export default {
    name: "user",
    components: {userHeader,slider},
    data(){
      return{
        quyen:{
          message:'',
        }
      }
    },
    async created() {
      this.quyen= await loginServices.Quyen();
      if(this.quyen.message=='chuadangnhap'){
        this.$router.push({ name: "login" });
      }
      if(this.quyen.message!=='khachtro'){
        this.$router.push({ name: "login" });
      }
    },
    
  };
  </script>
  
  <style></style>
  