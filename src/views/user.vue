<template>
        <div class="col-12">
          <userHeader></userHeader>
          <slider class="col-12"></slider>
          <trangChu></trangChu>
          <userFooter class="mt-5"></userFooter>
        </div>
        
</template>
  
  <script>
  
  import userHeader from '../components/user/userHeader.vue';
  import loginServices from "../services/login.services";
  import slider from  '../components/user/slider.vue';
  import userFooter from '../components/user/userfooter.vue';
  import trangChu from '../components/user/trangchu.vue';
  export default {
    name: "user",
    components: {userHeader,slider,userFooter,trangChu},
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
  