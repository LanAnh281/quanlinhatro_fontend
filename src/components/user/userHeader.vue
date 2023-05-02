<template>
 
  <header class="col-12 m-0 p-0 row justify-content-between">
    <nav class="col-8   navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav mr-auto text-center pl-1">
        <li class="nav-item">
          <img src="../../assets/img/logo.PNG" class="header_img" />
        </li>
        <li class="nav-item ml-1 navitem ">
          <router-link :to="{ name: 'user' }" 
          :class="{active : headerProps.trangchu}"
          style="color:brown" 
          class="nav-link navitem text-center">
            Trang chủ
          </router-link>
        </li>
        <li class="nav-item ml-1">
          <router-link :to="{ name: 'hopdongthue' }"
          :class="{active : headerProps.hopdong}" 
           style="color:brown" 
           class="nav-link navitem text-center">
            Hợp đồng
          </router-link>
        </li>
        <li class="nav-item ml-1">
          <router-link :to="{ name: 'userhoadon' }" 
          :class="{active: headerProps.hoadon}"
          style="color:brown" 
          class="nav-link navitem text-center">
            Hóa đơn
          </router-link>
        </li>
      </ul>
    </nav>
    <!--  -->
    <nav class="col-2 navbar text-left justify-items-end p-0 pl-5  navbar-expand-lg navbar-light list">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item " style="width: 100px; padding-left: 50px">
          <fa icon="user" style="color: brown;"></fa>
          
          <fa icon="chevron-down" class="pl-2"></fa>
          <ul >
            <li>
              <router-link :to="{ name: 'canhan' }">
                <span  class="mx-2" style="display:block">Cá nhân</span>
                
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'giahan' }">
                <span  class="ml-2" style="display:block">Đăng ký gia hạn</span>
              </router-link>
            </li>
            <li >
              <router-link :to="{ name: 'userdoimatkhau' }">
                <span  class="mx-2" style="display:block">Đổi mật khẩu</span>
              </router-link>
            </li>
            <li @click="logout" class="logout" >
              <router-link :to="{ name: ''}" >
                <span class="mx-2" style="display:block">Đăng xuất</span>
              </router-link>

            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import hopdongService from '../../services/hopdong.service';

export default {
  name: "userHeader",
  props:['headerProps'],
  data() {
    return {
      hopdong:{type:Array},
    };
  },
  async created(){
      await this.layHD(); 
    },

  methods: {
    delete_cookie(name) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    logout() {
      // console.log("logout");
      document.cookie =
        "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.$router.push({ name: "login" });
    },
    async layHD(){
      this.hopdong=await hopdongService.layHDK();

    }
  },
};
</script>
<style scoped>


.logout:hover a{
  color: red;
}

a:hover{
  background-image: linear-gradient(
    to right,
    rgb(243, 167, 180),
    rgb(133, 43, 235),
    rgb(182, 32, 182)
  ) ;
  color: yellow;
  display: block;
  width: calc(100%);
}
a{
  text-decoration: none;
  color: #F1E9e9;;
}
header {
 background-color:#f7f7f7;
}
li {
  line-height: 3;
}


.header_img {
  object-fit: cotain;
  width: 70px;
}

li {
  transition: 1s all;
  color: #fff;
  
}

li:hover {
  cursor: pointer;
}

li ul {
  top: 100;
  left: -64px;
  width: 154px;
  background: #1e2b32; 
  position: absolute;
  display: none;
}
li:hover > ul {
  display: block;
  cursor: pointer;
}
.navbar {
  height: 100px;
  display: flex;
  justify-content: space-between;
}
ul {
  z-index: 1;
  padding-left: 0;
  list-style: none;
}
.navbar {
  width: 100%;
}
.active{
  font-weight: bold;
  font-size: large;
}
.navitem{
  font-size:20px;
  
}

.navitem:hover {
  transition: 1s all;
  transform: scale(1.1); /* Equal to scaleX(0.7) scaleY(0.7) */
  color:rgb(204, 13, 45) !important;
  font-weight: bold;
  background-color: transparent;
  background-image: none;

}
</style>
