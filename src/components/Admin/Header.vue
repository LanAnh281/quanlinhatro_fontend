<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div >
        
        <router-link :to="{ name: 'admin' }">
          <fa icon="home"></fa>
        </router-link>

        /<span style="font-weight: 500;">{{silderProps}}</span>
      </div>

      <div>
        <ul>
          <li>
            <fa icon="user"></fa>
            <fa icon="chevron-down" class="pl-2"></fa>

            <ul>
              <li>
                <router-link :to="{ name: 'nhatro' }">Nhà Trọ</router-link>
              </li>
              <li> <router-link :to="{ name: 'doimatkhau' }">Đổi mật khẩu</router-link></li>
              <li @click="logout">Đăng xuất</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props:['silderProps'],
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
li:hover a {
  color: #2f89fc;
  text-decoration: none;
}
.navbar {
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.navbar {
  width: 100%;
}
ul {
  z-index: 1;
  padding-left: 0;
  list-style: none;
}

li {
  margin-top: 15px;
  padding: 10px;
  transition: 1s all;
  font-size: 18px;
  color: #fff;
  display: block;
  background-color: red;
  border-radius: 18px;
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
  width: 200px;
  background: #1e2b32;
  display: none;
  position: absolute;
}

li:hover > ul {
  display: block;
  cursor: pointer;
}
</style>
