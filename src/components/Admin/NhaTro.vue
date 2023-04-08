<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header></Header>

    <h3 class="text-center mt-5 mb-3">Thông tin nhà trọ</h3>
    <router-link :to="{ name: '' }">
      <button class="btn btn-primary">Cập nhật</button>
    </router-link>

    <div>
      <p><span>Tên nhà trọ:</span> {{ nhatro[0].tennhatro }}</p>
      <p><span>Họ tên chủ trọ:</span> {{  nhatro[0].hoten }}</p>
      <p><span>SĐT:</span> {{  nhatro[0].sdt }}</p>
      <p><span>Địa chỉ:</span> {{  nhatro[0].diachi }}</p>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import nhatroService from "@/services/nhatro.service";
export default {
  name: "nhatro",
  components: { Header, Sidebar },
  data() {
    return {
      nhatro: { type: Object },
    };
  },
  created() {
    this.TTNT();
  },
  methods: {
    async TTNT() {
      this.nhatro = await nhatroService.layTTNT();
      console.log(this.nhatro);
    },
  },
};
</script>

<style scoped>
.style {
  padding: 1px;
  width: 16px;
  color: white;
  border-radius: 15px;
}

.info {
  background-color: rgb(93, 42, 245);
}

.trash {
  color: red;
}
</style>
