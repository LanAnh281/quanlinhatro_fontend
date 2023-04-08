<template>
  <div>
    <ul>
      <li class="header">Admin</li>
      <li>
        <router-link :to="{ name: 'admin' }"> Hợp đồng</router-link>
      </li>
      <li>
        <router-link :to="{name:'khachhang'}">
           Khách hàng
        </router-link>
       
      </li>
      <li>
        <router-link :to="{ name: 'loaiphong' }"> Loại phòng</router-link>        
      </li>
      <li>Hóa đơn</li>
      <li>Phiếu gia hạn</li>
    </ul>
  </div>
</template>
<script>
import loaiphongService from "@/services/loaiphong.service";

export default {
  name:"Sidebar",
  comments:{},
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
}</script>

<style scoped>
a{
  color:#fff;
  position: relative;
  display: block;
}
li:hover a{
  color:#2f89fc;
  text-decoration: none;
  
}
.header {
  padding: 17px 0;
  text-align: center;
    font-weight: bold;
}
ul {
  z-index: 1;
  padding-left: 0;
  list-style: none;
  background-image: linear-gradient(
    to right,
    rgb(243, 167, 180),
    rgb(133, 43, 235),
    rgb(182, 32, 182)
  ) !important;
}

li {
  padding: 10px;
  border-bottom: 1px solid #cccc;
  transition: 1s all;
  font-size: 18px;
  margin-top: 0px;
  color: #fff;
  display: block;
  
}

li:hover {
  transition: 1s all;
  color: #2f89fc;
  background-color: rgba(42, 56, 65, 0.82);
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  cursor: pointer;
  
}
li ul {
  width: 100%;
  background: #1e2b32;
  margin-left: 156px;
  margin-top: -36px;
  display: none;
  position: absolute;
}

li:hover > ul {
  display: block;
  cursor: pointer;
}
</style>
