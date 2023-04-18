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
      <li class="header">Admin</li>
      <li>
        <router-link :to="{ name: 'admin' }"> Hợp đồng</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'khachhang' }"> Khách hàng </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'loaiphong' }"> Loại phòng</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'hoadon' }"> Hóa đơn</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'phieugiahan' }"> Phiếu gia hạn</router-link>
      </li>
      <li style="position: relative;">
        Thống kê
          <ul class="p0 m0" style="position: absolute;">
            <li >
              <router-link :to="{ name: 'nhatro' }">Tiền trọ</router-link>
            </li>
            <li> 
              <router-link :to="{ name: 'doimatkhau' }">Đổi mật khẩu</router-link>
            </li>
          </ul>
        </li>        
      
    </ul>
  </div>
</template>
<script>
import loaiphongService from "@/services/loaiphong.service";

export default {
  name: "Sidebar",
  comments: {},
  data() {
    const layDSLP = async () => {
      try {
        this.loaiphong = await loaiphongService.layDSLP();
      } catch (error) {
        console.log(error);
      }
    };
    return {
      loaiphong: layDSLP(),
    };
  },
};
</script>

<style scoped>
a {
  color: #fff;
  position: relative;
  display: block;
}
li:hover a {
  color: #2f89fc;
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
