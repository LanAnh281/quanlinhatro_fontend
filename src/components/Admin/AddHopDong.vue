<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="tacvu.ten"></Header>
    <h3 class="text-center my-5">
      {{ tacvu.ten }}
    </h3>
    <form @submit.prevent="save" class="pl-5">
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="matk" class="col-form-label" style="width: 120px"
            >Mã tài khoản</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="hopdong.matk"
            class="form-control"
            :class="{ 'is-invalid': errors.matk }"
            id="matk"
          />
          <div :class="{ 'invalid-feedback': errors.matk }">
            {{ errors.matk }}
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenloai" class="col-form-label" style="width: 120px"
            >Tên loại</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <select id="tenloai" class="form-control" @change="tenloai">
            <option :value="hopdong.maloai" selected>
              ---{{ hopdong.tenloai }}---
            </option>
            <option
              v-for="(lp, index) in loaiphong"
              :key="index"
              :value="lp.maloai"
            >
              {{ lp.tenloai }}
            </option>
          </select>
          <div style="color: #dc3545" v-if="errors.maloai">
            {{ errors.maloai }}
          </div>
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
          <select id="tenphong" class="form-control" @change="tenphong">
            <option :value="hopdong.maphong">
              ---{{ hopdong.tenphong }}---
            </option>
            <option v-for="(p, index) in phong" :key="index" :value="p.maphong">
              {{ p.tenphong }}
            </option>
          </select>
          <div style="color: #dc3545" v-if="errors.tenphong">
            {{ errors.tenphong }}
          </div>
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
            disabled
            v-model="hopdong.giaphong"
            class="form-control"
            id="giaphong"
          />
          <div :class="{ 'invalid-feedback': errors.matk }">
            {{ errors.matk }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="ngaybd" class="col-form-label" style="width: 120px"
            >Ngày bắt đầu</label
          >
          <span>:</span>
        </div>

        <div class="col-sm-10">
          <input
            type="date"
            class="form-control"
            id="ngaybd"
            :min="ngayhientai"
            v-model="hopdong.ngaybd"
            :class="{ 'is-invalid': errors.ngaybd }"
          />
          <div :class="{ 'invalid-feedback': errors.ngaybd }">
            {{ errors.ngaybd }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="ngaykt" class="col-form-label" style="width: 120px"
            >Ngày kết thúc</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control"
            id="ngaykt"
            :min="hopdong.ngaybd"
            v-model="hopdong.ngaykt"
            :class="{ 'is-invalid': errors.ngaykt }"
          />
          <div :class="{ 'invalid-feedback': errors.ngaykt }">
            {{ errors.ngaykt }}
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
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import hopdongService from "../../services/hopdong.service";
import phongService from "../../services/phong.service";
import loaiphongService from "../../services/loaiphong.service";
import taikhoanService from "../../services/taikhoan.service";
import khachhangService from "../../services/khachhang.services";

export default {
  name: "ThemHopDong",
  components: { Header, Sidebar },

  data() {
    return {
      dieuhuong: { hopdong: true },
      ngayhientai: "",
      tacvu: { ten: "", submit: "" },
      loaiphong: [],
      phong: [],
      hopdong: {
        type: Object,
      },
      errors: {
        ngaybd: "",
        ngaykt: "",
        matk: "",
        maphong: "",
        maloai: "",
      },
    };
  },
  async created() {
    await this.layLP();
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);
    this.ngayhientai = date;
    this.hopdong.ngaybd = this.ngayhientai;
    if (this.$route.params.mahd) {
      this.tacvu = { ten: "Chỉnh sửa hợp đồng", submit: "Cập nhật" };
    } else {
      this.tacvu = { ten: "Thêm hợp đồng", submit: "Thêm" };
    }
  },
  methods: {
    async layLP() {
      this.loaiphong = await loaiphongService.layDSLP();
      if (this.$route.params.mahd) {
        this.hopdong = await hopdongService.layHD(this.$route.params.mahd);
        this.hopdong = this.hopdong[0];

        var p = await phongService.layPhong(this.hopdong.maphong);
        let lp = await loaiphongService.layLP(p[0].maloai);
        this.hopdong["maloai"] = lp.maloai;
        this.hopdong.tenloai = lp.tenloai;
        this.hopdong.tenphong = p[0].tenphong;

        let khach = await khachhangService.layKH(this.hopdong.stt_tk);
        this.hopdong.hoten = khach.hoten;
        this.hopdong.stt = khach.STT;
        this.hopdong.tentk = khach.matk;
        this.hopdong.matk = khach.matk;
        // console.log("mã tk", this.hopdong.matk);

        this.hopdong.maphongtruoc = this.hopdong.maphong;
        let lpgia = await loaiphongService.layLP(this.hopdong.maloai);
        this.hopdong.giaphong = lpgia.giaphong;
      }
    },
    async validate() {
      var isvalid = true;
      this.errors = {
        ngaybd: "",
        ngaykt: "",
        matk: "",
        maphong: "",
        tenphong: "",
        maloai: "",
        solan: 0,
      };

      if (!this.hopdong.matk) {
        this.errors.matk = "Mã tài khoản không được bỏ trống";
        isvalid = false;
      } else if (this.hopdong.matk) {
        if (this.hopdong.matk.length == 3) {
          let tk = await khachhangService.layKH(this.hopdong.matk.slice(-1));
          if (JSON.stringify(tk) === "{}") {
            this.errors.matk = "Mã tài khoản không tồn tại";
            isvalid = false;
          }
        } else if (this.hopdong.matk.length == 4) {
          let tk = await khachhangService.layKH(this.hopdong.matk.slice(-2));
          if (JSON.stringify(tk) === "{}") {
            this.errors.matk = "Mã tài khoản không tồn tại";
            isvalid = false;
          }
        } else {
          this.errors.matk = "Mã tài khoản không tồn tại";
          isvalid = false;
        }
      }

      if (!this.hopdong.maloai) {
        this.errors.maloai = "Tên loại không được bỏ trống";
        isvalid = false;
      }
      if (!this.hopdong.maphong) {
        this.errors.tenphong = "Tên phòng không được bỏ trống";
        isvalid = false;
      }

      if (this.hopdong.ngaykt < this.hopdong.ngaybd) {
        this.errors.ngaykt = "Ngày kết thúc thuê nhỏ hơn ngày bắt đầu thuê";
        isvalid = false;
      } else if (!this.hopdong.ngaykt) {
        this.errors.ngaykt = "Ngày kết thúc thuê không được rỗng";
        isvalid = false;
      }
      console.log("valide:", isvalid);
      return isvalid;
    },

    async tenloai(loai) {
      let lp = await loaiphongService.layLP(loai.target.value);
      this.hopdong.giaphong = lp.giaphong;
      this.phong = await phongService.LayTTPTheoLoai(loai.target.value);
      this.phong = this.phong.filter((p, index) => {
        return p.trangthai == "0";
      });
      this.hopdong.maloai = loai.target.value;
      let loaiphong = await loaiphongService.layLP(loai.target.value);
      this.hopdong.tenloai = loaiphong.tenloai;
    },
    async tenphong(phong) {
      this.hopdong.maphong = phong.target.value;
      let tenphong = await phongService.layPhong(this.hopdong.maphong);
      // console.log("Tên phòng là:",tenphong);
      // this.hopdong.tenphong=tenphong[0].tenphong;
    },
    async save() {
      console.log(await this.validate());
      console.log( await this.hopdong);
      if (await this.validate() ==true) {
        console.log("1");
        if (this.$route.params.mahd) {
          let mes = await hopdongService.chinhsuaHD(
            this.$route.params.mahd,
            this.hopdong
          );
          let ob = { trangthai: "1" };
          await phongService.chinhsuaPhong(this.hopdong.maphong, ob);
          let obodd = { trangthai: "0" };
          await phongService.chinhsuaPhong(this.hopdong.maphongtruoc, obodd);

          this.$swal.fire({
            title: "Cập nhật thành công hợp đồng",
            confirmButtonText: "OK",
          });
          return;
        }
        console.log("thêm hợp đồng")
        let mes = await hopdongService.themHD(this.hopdong);
        if (mes.message == "thêm hợp đồng") {
          let ob = { trangthai: "1" };
          await phongService.chinhsuaPhong(this.hopdong.maphong, ob);
          this.$swal.fire({
            title: "Tạo thành công hợp đồng",
            confirmButtonText: "OK",
          });
        }
        return;
      }

      // }
    },
  },
};
</script>
<style>
hien {
  color: red;
}
an {
  display: none;
  background-color: red;
}
</style>
