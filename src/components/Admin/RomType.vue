<template>  
    
        
        <table class="table ">
          <thead>
            
            <tr>
              <th scope="col">Tên phòng</th>
              <th scope="col">Diện tích</th>
              <th scope="col">Giá phòng</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="lp in loaiphong" :key="lp.id" >
              <td>{{ lp.tenloai }}</td>
              <td>{{ lp.dientich}}</td>
              <td>{{ lp.giaphong}}</td>
              <td> 
                <fa icon="edit" class="mr-3"></fa>
                <fa :icon="['fab','youtube']"></fa>
              </td>
            </tr>
          </tbody>
        </table>
     
 
      
</template>

<script>

import loaiphongService from "@/services/loaiphong.service";
export default{
    name:"DSLP",
    components:{},
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