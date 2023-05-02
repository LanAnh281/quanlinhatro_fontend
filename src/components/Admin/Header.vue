<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div >
        <!-- <form @submit.prevent="thanhtoan">
          <button>thanh toán</button>
      </form> -->
     
      
        <router-link :to="{ name: 'admin' }" style="color:blue">
          <fa icon="home"></fa>
        </router-link>

        /<span style="font-weight: 500;">{{silderProps}}</span>
      </div>

      <div>
        <nav class="col-2 navbar navbar-expand-lg navbar-light list">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" style="width: 100px; padding-left: 50px">
              <fa icon="user"></fa>
              <fa icon="chevron-down" class="pl-2"></fa>
              <ul>
                <li>
                  <router-link :to="{ name: 'nhatro' }">Nhà trọ</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'doimatkhau' }">
                    Đổi mật khẩu
                  </router-link>
                </li>
                <li @click="logout">Đăng xuất</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
import paypalService from '../../services/paypal.service';
import loaiphongService from '../../services/loaiphong.service';
// import axios from "axios";
export default {
  name: "Header",
  props:['silderProps'],
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
    async thanhtoan(){
      // console.log('hi');
      let a=await paypalService.hienTT()
      // console.log(a);
     var url=await paypalService.taoTT();
    //  console.log(url)
     window.location=url;
    }
  },
};
</script>

<style scoped>
li:hover a {
  text-decoration: none;
}
a:hover{
  color:rgb(255, 240, 255);
  display: inline-block;
  background-color: transparent;
}
.navbar {
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.navbar {
  width: 100%;
}
a{
  color: #fff;
}
a:hover{
  color:yellow;
}
li {
  transition: 1s all;
  color: #b23808;
  padding: 10px;

}

li:hover {
  transition: 1s all;
  color: #f20808;
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  border-top-left-radius: 10px 10px;
  border-bottom-left-radius: 10px 10px;
  cursor: pointer;
}

li ul {
  top: 100;
  left: -64px;
  width: 154px;
  background-image: linear-gradient(
    to right,
    rgb(243, 167, 180),
    rgb(133, 43, 235),
    rgb(182, 32, 182)
  );
  display: none;
  position: absolute;
  border-radius: 16px;
}
li ul li{
  border-bottom: 1px #ffff solid;

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

</style>
