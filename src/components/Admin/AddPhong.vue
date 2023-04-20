<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Thêm phòng'"></Header>
    <form v-on:submit.prevent="save" class="pl-5">
      <h3 class="text-center my-5">{{ tacvu.name }}</h3>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenloai" class="col-form-label" style="width: 120px"
            >Tên loại</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="phong.tenloai"
            :disabled="phong.tenloai"
            name="tenloai"
            class="form-control"
            id="tenloai"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="dientich" class="col-form-label" style="width: 120px"
            >Diện tích</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="phong.dientich"
            :disabled="phong.dientich"
            name="dientich"
            class="form-control"
            id="dientich"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="giaphong" class="col-form-label" style="width: 120px"
            >Giá phòng</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="phong.giaphong"
            :disabled="phong.giaphong"
            name="giaphong"
            class="form-control"
            id="giaphong"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenphong" class="col-form-label" style="width: 120px"
            >Phòng</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="phong.tenphong"
            name="tenphong"
            :class="{ 'is-invalid': error.tenphong }"
            @blur="validate"
            class="form-control"
            id="tenphong"
          />
          <div class="invalid-feedback" v-if="error.tenphong">
            {{ error.tenphong }}
          </div>
        </div>
      </div>
      <div class="my-2">
        <label for="tenloai" class="col-sm-2 col-form-label"></label>
        <button class="btn btn-primary col-2" style="height: 40px">
          {{ tacvu.submit }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import phongService from "../../services/phong.service";
import loaiphongService from "../../services/loaiphong.service";

import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

export default {
  name: "AddRoom",
  components: { Header, Sidebar },
  data() {
    return {
      tacvu: { name: "", submit: "" },
      phong: { type: Object },
      error: { tenphong: "" },
    };
  },
  created() {
    if (this.$route.params.maloai) {
      this.layPhong(this.$route.params.maloai);
      this.tacvu = { name: "THÊM PHÒNG", submit: "Thêm" };
    }
  },
  methods: {
    async layPhong(maloai) {
      this.phong = await loaiphongService.layLP(maloai);
      this.phong.tenphong = "";
    },
    async validate() {
      let isEmpty = true;
      this.error.tenphong='';
      if (!this.phong.tenphong) {
        this.error.tenphong = "Tên phòng không được bỏ trống";
        isEmpty = false;
        return isEmpty;
      } else {
        let tenphong = await phongService.LayTTPTheoLoai(
          this.$route.params.maloai
        );
        let isEmptyTP = tenphong.every((p, index) => {
          return p.tenphong != this.phong.tenphong;
        });
        if (!isEmptyTP) this.error.tenphong = "Tên phòng đã tồn tại";
        return isEmpty;
      }
    },
    async save() {
      let check =await this.validate();
      if (check) {
        let message = await phongService.themPhong(
          this.$route.params.maloai,
          this.phong
        );

        this.$swal.fire({
          title: "Thêm phòng thành công",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>
