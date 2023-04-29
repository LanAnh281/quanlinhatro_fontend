<template>
  <form method="post" action="http://localhost:3000/api/khachtro" enctype="multipart/form-data">
    <div class="form-group">
        <input type="file" name="anhcccd" class="input-group input-file"/>
        <button type="submit" name="upload" class="btn btn-primary pull-right">Upload</button>
    </div>
  </form>

  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Khách hàng'"></Header>
    <h3 class="text-center my-5">{{ tacvu.ten }}</h3>
    <form method="post" action="http://localhost:3000/api/khachtro"  enctype="multipart/form-data">
      <div class="form-group row">
        <label for="hoten" class="col-sm-2 col-form-label">Họ tên</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="hoten"
            v-model="khachhang.hoten"
            v-bind:class="{ 'is-invalid': errors.hoten }"
            @blur="validate()"
            class="form-control"
            id="hoten"
          />
          <div class="invalid-feedback" v-if="errors.hoten">{{errors.hoten}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="cccd" class="col-sm-2 col-form-label">Số CCCD</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="cccd"
            v-model="khachhang.cccd"
            v-bind:class="{ 'is-invalid': errors.cccd }"
            @blur="validate()"
            class="form-control"
            id="cccd"
          />         
          <div class="invalid-feedback" v-if="errors.cccd">{{errors.cccd}}</div>

        </div>
      </div>
      <div class="form-group row">
        <label for="anhcccd" class="col-sm-2 col-form-label">Ảnh CCCD</label>
        <div class="col-sm-10">
          <input
          class="form-control"
            id="anhcccd"
            type="file"
            name="anhcccd"
            
            @change="onImage"
          />         {{ khachhang.anhCCCD }}

        </div>
      </div>
      <div class="form-group row">
        <label for="sdt" class="col-sm-2 col-form-label">SĐT</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="sdt"
            v-model="khachhang.sdt"
            v-bind:class="{ 'is-invalid': errors.sdt }"
            @blur="validate()"
            class="form-control"
            id="sdt"
          />
          <div class="invalid-feedback" v-if="errors.sdt">{{errors.sdt}}</div>

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
            v-bind:class="{ 'is-invalid': errors.nghenghiep }"
            @blur="validate()"
            class="form-control"
            id="nghenghiep"
          />
          <div class="invalid-feedback" v-if="errors.nghenghiep">{{errors.nghenghiep}}</div>

        </div>
      </div>
      <div class="form-group row">
        <label for="quequan" class="col-sm-2 col-form-label">Quê quán</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="quequan"
            v-model="khachhang.quequan"
            v-bind:class="{ 'is-invalid': errors.quequan }"
            @blur="validate()"
            class="form-control"
            id="quequan"
          />
          <div class="invalid-feedback" v-if="errors.quequan">{{errors.quequan}}</div>

        </div>
      </div>
      <label for="quequan" class="col-sm-2 col-form-label"></label>

      <button   class="btn btn-primary col-2" style="height: 40px">
        {{ tacvu.submit }}
      </button>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import khachhangService from "@/services/khachhang.services";
import test from '../../services/test.service';
export default {
  name: "themkhachhang",
  components: { Header, Sidebar },
  data() {
    return {
      dieuhuong:{khachhang:true},

      thongbao: { type: Object },
      tacvu: { ten: "", submit: "" },
      khachhang: {
        STT: "",
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
      errors: {
        hoten: "",
        cccd: "",
        nghenghiep: "",
        quequan: "",
        sdt: "",
      },
    };
  },
  created() {
    let ID = this.$route.params.sotk;
    if (this.$route.params.sotk) {
      this.tacvu.ten = "Cập nhật khách hàng";
      this.tacvu.submit = "Cập nhật";
      this.layTK(ID);
    } else {
      this.tacvu.ten = "Thêm khách hàng";
      this.tacvu.submit = "Thêm";
    }
  },
  methods: {
    async testupload(){
      await test.testU();
    },
    async layTK(sotk) {
      this.khachhang = await khachhangService.layKH(sotk);
    },
    validate() {
      let isvalid = true;
      this.errors = {
        hoten: "",
        cccd: "",
        nghenghiep: "",
        quequan: "",
        sdt: "",
      };
      if (!this.khachhang.hoten) {
        this.errors.hoten = "Họ tên khách hàng không được trống";
        isvalid = false;
      }
      if (!this.khachhang.cccd) {
        this.errors.cccd = "Số CCCD không được trống và gồm 12 số";
        isvalid = false;
      } 
      else if(this.khachhang.cccd){
        if(this.khachhang.cccd.length==12){
          let t=this.khachhang.cccd.split("");
          // collection.toArray();
          t.forEach(i => {
            if(!this.isNumber(i)){
              this.errors.cccd = "Số CCCD  gồm 12 số ";
              isvalid = false;
              return;
            }
          });
        }
        else{
          this.errors.cccd = "Số CCCD  gồm 12 số";
            isvalid = false;
        }
       
      }
      if (!this.khachhang.sdt) {
        this.errors.sdt = "SĐT không được trống";
        isvalid = false;
      }
      if(this.khachhang.sdt){
        if(this.khachhang.sdt.length==10){
          let sdt=this.khachhang.sdt.split("");
          // collection.toArray();
          sdt.forEach(i => {
            if(!this.isNumber(i)){
              this.errors.sdt = "SĐT  gồm 10 số ";
              isvalid = false;
              return;
            }
          });
        }
        else{
          this.errors.sdt = " SĐT  gồm 10 số";
            isvalid = false;
        }
       
      }

      if (!this.khachhang.quequan) {
        this.errors.quequan = "Quê quán không được trống";
        isvalid = false;
      }
      if (!this.khachhang.nghenghiep) {
        this.errors.nghenghiep = "nghề nghiệp không được trống";
        isvalid = false;
      }
      return isvalid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    onImage(e){
      const selectedFile = document.getElementById("anhcccd").files[0];
      // console.log(selectedFile);
      this.khachhang.anhcccd=selectedFile;
    },
    async save() {
      console.log("thêm");
      if (this.validate()) {
        if (this.$route.params.sotk) {
          this.thongbao = await khachhangService.chinhsuaKH(
            this.$route.params.sotk,
            this.khachhang
          );

          this.$swal.fire({
            title: "Chỉnh sửa thành công",
            confirmButtonText: "OK",
          });
          return;
        }

        this.thongbao = await khachhangService.themKH(this.khachhang);
        this.$swal.fire({
         
          title: "Bạn có muốn in tài khoản ?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "In",
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$router.push({name:'khachhang.in',params:{STT:this.thongbao.STT}});
          }
        });
      }
      else{
        this.$swal.fire({
            title: "Bạn đã điền thiếu thông tin, hãy kiểm tra lại",
            confirmButtonText: "OK",
          });
      }
    },
  },
};
</script>
