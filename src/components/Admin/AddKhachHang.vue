<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Khách hàng'"></Header>
    <h3>Thêm khách hàng</h3>
    <form @submit.prevent="save">
      <div class="form-group row">
        <label for="hoten" class="col-sm-2 col-form-label">Họ tên</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="hoten"
            v-model="khachhang.hoten"
            class="form-control"
            id="hoten"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="cccd" class="col-sm-2 col-form-label">Số CCCD</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="cccd"
            v-model="khachhang.cccd"
            class="form-control"
            id="cccd"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="sdt" class="col-sm-2 col-form-label">SĐT</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="sdt"
            v-model="khachhang.sdt"
            class="form-control"
            id="sdt"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="nghenghiep" class="col-sm-2 col-form-label"
          >Nghề nghiệp</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            name="nghenghiep"
            v-model="khachhang.nghenghiep"
            class="form-control"
            id="nghenghiep"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="quequan" class="col-sm-2 col-form-label">Quê quán</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="quequan"
            v-model="khachhang.quequan"
            class="form-control"
            id="quequan"
          />
        </div>
      </div>
      <label for="quequan" class="col-sm-2 col-form-label"></label>

      <button class="btn btn-primary col-sm-1">Thêm</button>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import khachhangService from "@/services/khachhang.services";

export default {
  name: "themkhachhang",
  components: { Header, Sidebar },
  data() {
    return {
      thongbao: { type: Object },
      khachhang: {
        STT: '',
        matk: "",
        matkhau: "",
        quyen: "",
        handung: "",
        sdt: "",
        cccd: "",
        hoten: "",
        nghenghiep: "",
        quequan: "",
      },
    };
  },
  created() {
    let ID = this.$route.params.sotk;
    this.layTK(ID);
  },
  methods: {
    async layTK(sotk) {
      this.khachhang = await khachhangService.layKH(sotk);
      console.log(this.khachhang);
    },
    async save() {
      if(this.$route.params.sotk){
       this.thongbao= await khachhangService.chinhsuaKH(this.$route.params.sotk,this.khachhang);
        console.log(this.thongbao);
        this.$swal.fire({
            title: "Chỉnh sửa thành công",
            confirmButtonText: "OK",
          });
        return;
      }

      this.thongbao = await khachhangService.themKH(this.khachhang);
      this.$swal.fire({
            title: "Thêm thành công",
            confirmButtonText: "OK",
          });
    },
  },
};
</script>
