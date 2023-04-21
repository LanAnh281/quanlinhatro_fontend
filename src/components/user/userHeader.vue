<template>
    <slider class="col-12"></slider>
  <header class="col-12 row justify-content-between">
    <nav class="col-8 mx-4 navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav mr-auto text-center">
        <li class="nav-item">
          <img src="../../assets/img/logo.PNG" class="header_img" />
        </li>
        <li class="nav-item ml-1">
          <router-link :to="{ name: '' }" class="nav-link active text-center">
            Trang chủ
          </router-link>
        </li>
        <li class="nav-item ml-1">
          <router-link :to="{ name: '' }" class="nav-link active text-center">
            Hợp đồng
          </router-link>
        </li>
        <li class="nav-item ml-1">
          <router-link :to="{ name: '' }" class="nav-link active text-center">
            Hóa đơn
          </router-link>
        </li>

        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Dịch vụ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Đơn giá</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hợp đồng</a>
        </li> -->
      </ul>
    </nav>
    <nav class="col-2 navbar navbar-expand-lg navbar-light list">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" style="width: 100px; padding-left: 50px">
          <fa icon="user"></fa>
          <fa icon="chevron-down" class="pl-2"></fa>
          <ul>
            <li>
              <router-link :to="{ name: '' }">Cá nhân</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'userdoimatkhau' }">
                Đổi mật khẩu
              </router-link>
            </li>
            <li @click="logout">Đăng xuất</li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import slider from '../user/slider.vue';
export default {
  name: "userHeader",
  components: { slider },
  data() {
    return {};
  },
  methods: {
    delete_cookie(name) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
    logout() {
      console.log("logout");
      document.cookie =
        "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped>
:root {
  --primary-color: #dcdcdc;
}
.header,
.footer {
  width: 100%;
}
header {
  background-color: #d5f7f2;
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
  border-radius: 18px;
}

li:hover {
  transition: 1s all;
  color: #fc2fbb;
  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  cursor: pointer;
}

li ul {
  top: 100;
  left: -64px;
  width: 154px;
  background: #1e2b32;
  display: none;
  position: absolute;
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
