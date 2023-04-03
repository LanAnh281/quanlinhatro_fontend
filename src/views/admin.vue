<template>  
    
    <div class="row">
      <Sidebar class="col-2 px-0"></Sidebar>
      <div class="col-10 px-0">
        <Header></Header>
        <RoomType></RoomType>
      </div>
    </div>
 
      
</template>

<script>
import Header from '../components/Admin/Header.vue';
import Sidebar from '../components/Admin/sidebar.vue';
import RoomType from '../components/Admin/RomType.vue';
import loaiphongService from "@/services/loaiphong.service";
export default{
    name:"DSLP",
    components:{Header,Sidebar,RoomType},
    data(){
      const layDSLP=async()=>{
          try{
            this.loaiphong=await loaiphongService.layDSLP();

          }catch(error){
            console.log(error);
          }
        }
      return{
        loaiphong: layDSLP(),
      }
      
      
    },
    method:{
        async layDSLP(){
          try{
            this.loaiphong=await loaiphongService.layDSLP();

          }catch(error){
            console.log(error);
          }
        }
    },
  
}
</script>

<style>
  
</style>