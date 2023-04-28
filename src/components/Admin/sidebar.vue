<template>
  <div
    style="height: 100vh;
      top: 0px;
      background-image: linear-gradient(
        to right,
        rgb(243, 167, 180),
        rgb(133, 43, 235),
        rgb(182, 32, 182)
      ) !important;
    "
      
  >
    <ul>
      <li class="header ">{{nhatro.hoten}}</li>
      <li :class="{isAcctive : dieuhuongProps.hopdong}">
        <router-link :to="{ name: 'admin' }"> Hợp đồng</router-link>
      </li>
      <li :class="{isAcctive : dieuhuongProps.khachhang}">
        <router-link :to="{ name: 'khachhang' }"> Khách hàng </router-link>
      </li>
      <li :class="{isAcctive : dieuhuongProps.loaiphong}">
        <router-link :to="{ name: 'loaiphong' }"> Loại phòng</router-link>
      </li>
      <li :class="{isAcctive : dieuhuongProps.hoadon}">
        <router-link :to="{ name: 'hoadon' }"> Hóa đơn</router-link>
      </li>
      <li :class="{isAcctive : dieuhuongProps.phieugiahan}">
        <router-link :to="{ name: 'phieugiahan' }"> Phiếu gia hạn</router-link>
      </li>
      <li style="position: relative;"  :class="{isAcctive : dieuhuongProps.thongke}" >
        Thống kê
          <ul class="p0 m0" style="position: absolute;">
            <li >
              <router-link :to="{ name: 'chartTK',
              params:{nam:namhientai}
              }"
              >
                Điện-Nước</router-link>
            </li>
            <li> 
              <router-link :to="{ name: 'chartTT',params:{nam:namhientai}  }">
                Tiền trọ
              </router-link>
            </li>
          </ul>
        </li>        
      
    </ul>
  </div>
</template>
<script>
import nhatroService from "@/services/nhatro.service";

export default {
  name: "Sidebar",
  comments: {},
  props:['dieuhuongProps'],
  data(){
    return{
      namhientai: '',
      nhatro:{type:Object}
    }
  },
  async created(){
    var today= new Date();
    this.namhientai= today.getFullYear();
    this.nhatro= await nhatroService.layTTNT(); 
    this.nhatro=this.nhatro[0];

  }

 
};
</script>

<style scoped>
.isAcctive{
  background: #E1FFFE;
  color:#5c1ad9
}
.isAcctive a{
  color:#5c1ad9
}

a {
  color: #fff;
  position: relative;
  display: block;
}
a:hover{
  background-color: transparent;
 
}

li:hover a {
  color: yellow;
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
  top:100%;
  display: none;
  position: absolute;
  left: 0;
}

li:hover > ul {
  display: block;
  cursor: pointer;
}
</style>
