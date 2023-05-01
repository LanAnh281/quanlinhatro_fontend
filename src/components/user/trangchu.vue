<template>
    <div class="row justify-content-around"> 
        <div class="card text-center col-3" style="width: 15rem;">
           <fa icon="user" class="mt-2" style="font-size: 48px; color:#5c1ad9"></fa>
            <div class="card-body">
              <h5 class="card-title">Khách trọ</h5>
              <p class="card-text">{{hopdong.hoten}}</p>
            </div>
        </div>
        <div class="card text-center col-3" style="width: 15rem;">
            <fa icon="house" class="mt-2" style="font-size: 48px;color:#5c1ad9"></fa>
             <div class="card-body">
               <h5 class="card-title">Phòng</h5>
               <p class="card-text">{{hopdong.tenphong}}</p>
             </div>
        </div>
          <div class="card text-center col-3" style="width: 15rem;">
            <fa icon="calendar" class="mt-2"  style="font-size: 48px;color:#5c1ad9"></fa>
             <div class="card-body">
               <h5 class="card-title">Ngày kết thúc</h5>
               <p class="card-text">{{hopdong.ngaykt}}</p>
             </div>
        </div>
    
    </div>
</template>
<script>
import hopdongService from '../../services/hopdong.service';
export default ({
    name:"trangchu",
  data(){
    return{
      hopdong:{type:Array},
      
    }
  },
  async created(){
      await this.layHD(); 
    },
  methods:{
   
    async layHD(){
      this.hopdong=await hopdongService.layHDK();

    }
  },
  
 
});
</script>
<style>
</style>