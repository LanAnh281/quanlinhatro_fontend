<template>
  <Sidebar class="col-2 px-0"></Sidebar>
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
            @blur="validate"
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
          <label for="hoten" class="col-form-label" style="width: 120px"
            >Họ tên</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            
            v-model="hopdong.hoten"
            @blur="validate"
            :class="{ 'is-invalid': errors.hoten }"
            id="hoten"
          />
          <div :class="{ 'invalid-feedback': errors.hoten }">
            {{ errors.hoten }}
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
            <option :value="hopdong.maloai" selected>---{{hopdong.tenloai}}---  </option>
            <option
              v-for="(lp, index) in loaiphong"
              :key="index"
              :value="lp.maloai"
            >
              {{ lp.tenloai }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenphong" 
          class="col-form-label" style="width: 120px">Phòng</label>
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <select id="tenphong" class="form-control" @change="tenphong">
            <option :value="hopdong.maphong"  > ---{{hopdong.tenphong}}--- </option>
            <option  v-for="(p, index) in phong" 
            :key="index" :value="p.maphong">
              {{ p.tenphong }}
            </option>
          </select>
          <div :class="{ 'invalid-feedback': errors.maphong }">
            {{ errors.maphong }}
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
            v-model="hopdong.ngaybd"
            @blur="validate"
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
            v-model="hopdong.ngaykt"
            @blur="validate"
            :class="{ 'is-invalid': errors.ngaykt }"
          />
          <div :class="{ 'invalid-feedback': errors.ngaykt }">
            {{ errors.ngaykt }}
          </div>
        </div>
      </div>
      <div class="my-2">
        <label for="tenloai" class="col-sm-2 col-form-label"></label>
        <button class="btn btn-primary col-2" style="height: 40px">{{tacvu.submit}}</button>
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
      tacvu:{ten:'',submit:''},
      loaiphong: [],
      phong: [],
      hopdong: {
       type:Object
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
  created() {
    this.layLP();
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      today.getDate();
    this.hopdong.ngaybd = date;
    if(this.$route.params.mahd){
      this.tacvu={ten:'Chỉnh sửa hợp đồng',submit:'Cập nhật'};
    }else{
      this.tacvu={ten:'Thêm hợp đồng',submit:'Thêm'};

    }
  },
  methods: {
    async layLP() {
      this.loaiphong = await loaiphongService.layDSLP();
      if(this.$route.params.mahd){
        this.hopdong=await hopdongService.layHD(this.$route.params.mahd);
        this.hopdong=this.hopdong[0];
        
        var p=await phongService.layPhong(this.hopdong.maphong);
        let lp= await loaiphongService.layLP(p[0].maloai);
        this.hopdong['maloai']=lp.maloai;
        this.hopdong.tenloai=lp.tenloai;
        this.hopdong.tenphong=p[0].tenphong;

        let khach= await khachhangService.layKH(this.hopdong.stt_tk);
        this.hopdong.hoten=khach.hoten;
        this.hopdong.stt=khach.STT;
        this.hopdong.tentk=khach.matk;
        this.hopdong.matk=khach.matk;
        console.log("mã tk",this.hopdong.matk);

        this.hopdong.maphongtruoc=this.hopdong.maphong;
        let lpgia= await loaiphongService.layLP(this.hopdong.maloai);
        this.hopdong.giaphong=lpgia.giaphong;
      }
      
    },
    async validate() {
      let isvalid = true;
      this.errors = {
        ngaybd: "",
        ngaykt: "",
        matk: "",
        maphong: "",
        maloai: "",
        hoten: "",
      };
      if (!this.hopdong.matk) {
        this.errors.matk = "Mã tài khoản không được bỏ trống";
        isvalid = false;
      } else if (this.hopdong.matk) {
        let tk = await khachhangService.layKH(this.hopdong.matk.slice(-2));
        if (tk.length == 0) this.errors.matk = "Mã tài khoản không tồn tại";
        isvalid = false;
      }
      if (!this.hopdong.hoten) {
        this.errors.hoten = "Họ tên không được bỏ trống";
        isvalid = false;
      }
      if (!this.hopdong.maloai) {
        this.errors.maloai = "Tên loại không được bỏ trống";
        isvalid = false;
      }
      if (!this.hopdong.tenphong) {
        this.errors.tenphong = "Tên phòng không được bỏ trống";
        isvalid = false;
      }
      if (!this.hopdong.ngaybd) {
        this.errors.ngaybd = "Ngày bắt đầu không được bỏ trống";
        isvalid = false;
      } else if (this.hopdong.ngaybd) {
        var today = new Date();
        var date =
          today.getFullYear() +
          "-" +
          ("0" + (today.getMonth() + 1)).slice(-2) +
          "-" +
          today.getDate();
        if (date > this.hopdong.ngaybd) {
          this.errors.ngaybd = "Ngày bắt đầu thuê bạn chọn là ngày quá khứ";
        }
        isvalid = false;
      }
      if (!this.hopdong.ngaykt) {
        this.errors.ngaykt = "Ngày kết thúc không được bỏ trống";
        isvalid = false;
      } else if (this.hopdong.ngaykt) {
        if (this.hopdong.ngaykt < this.hopdong.ngaybd) {
          this.errors.ngaykt = "Ngày kết thúc thuê nhỏ hơn ngày bắt đầu thuê";
        }
        isvalid = false;
      }
      return isvalid;
    },

    async tenloai(loai) {
      let lp= await loaiphongService.layLP(loai.target.value);
      this.hopdong.giaphong=lp.giaphong;
      this.phong = await phongService.LayTTPTheoLoai(loai.target.value);
      this.phong = this.phong.filter((p, index) => {
        return p.trangthai == "0";
      });
      this.hopdong.maloai=loai.target.value;
      let loaiphong= await loaiphongService.layLP(loai.target.value);
      this.hopdong.tenloai=loaiphong.tenloai;
    },
    async tenphong(phong) {
      this.hopdong.maphong = phong.target.value;
    },
    async save() {
      if (this.validate) {
        if(this.$route.params.mahd){
          let mes=await hopdongService.chinhsuaHD(this.$route.params.mahd,this.hopdong);
          let ob = { trangthai: "1" };
          await phongService.chinhsuaPhong(this.hopdong.maphong, ob);
          let obodd={ trangthai: "0" };
          await phongService.chinhsuaPhong(this.hopdong.maphongtruoc, obodd);

          this.$swal.fire({
            title: "Cập nhật thành công hợp đồng",
            confirmButtonText: "OK",
          });
          return;
        }
        let mes = await hopdongService.themHD(this.hopdong);
        if (mes.message == "thêm hợp đồng") {
          let ob = { trangthai: "1" };
          await phongService.chinhsuaPhong(this.hopdong.maphong, ob);
          this.$swal.fire({
            title: "Tạo thành công hợp đồng",
            confirmButtonText: "OK",
          });
        }
      }
    },
  },
};
</script>
<style>
an {
  display: none;
  background-color: red;
}
</style>
