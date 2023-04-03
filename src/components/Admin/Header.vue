<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div><fa icon="home"></fa>/??</div>

      <div>
        <ul>
          <li>
            <fa icon="user"></fa>
            <fa icon="chevron-down" class="pl-2"></fa>

            <ul>
              <li>Nhà Trọ</li>
              <li>Đổi mật khẩu</li>
              <li>Đăng xuất</li>
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
};
</script>

<style scoped>
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
