<template>
  <footer class="row justify-content-between">
    <div class="col-8 mx-3 my-4">
      <h6><fa icon="home" style="color:#5c1ad9"></fa> &nbsp; Nhà trọ: {{ nhatro.tennhatro }}</h6>
      <h6>
        <fa icon="phone" style="color:#5c1ad9"></fa> &nbsp; SĐT: {{ nhatro.sdt }} ({{ nhatro.hoten }})
      </h6>
      <h6><fa icon="map" style="color:#5c1ad9"></fa> &nbsp; Địa chỉ: {{ nhatro.diachi }}</h6>
    </div>
    <div class="col-1 my-4 mx-5" style="width: 70px">
      <img
        src="../../assets/img/logo.PNG"
        style="height: 80px; object-fit: cotain"
      />
    </div>
  </footer>
</template>
<script>
import nhatroService from "../../services/nhatro.service";

export default {
  name: "userFooter",
  data() {
    return {
      nhatro: { type: Array },
    };
  },
  created() {
    this.layNT();
  },
  methods: {
    async layNT() {
      this.nhatro = await nhatroService.layTTNT();
      this.nhatro = this.nhatro[0];
    },
  },
};
</script>
<style scoped>
h6{
  font-weight: 600;
}

footer {
  background-color: #f7f7f7;
  padding: 0;
  margin: 0;
  width: 100%;
  bottom: 0px;
  height: 130px;
 
}
</style>
