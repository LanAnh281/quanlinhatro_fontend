<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Đổi mật khẩu'"></Header>
    <form @submit.prevent="checkLogin" class="background mt-5">
        <h1 class="text-center mt-5 mb-3">Đổi mật khẩu</h1>
     
        <div class="form-group row justify-content-center">
            <label
            for="inputPasswordNew" 
            class="col-sm-3 col-form-label"
            style="width: 160px"
              >Mật khẩu mới</label
            >
            <span>:</span>
            <div class="col-sm-5">
              <input
              type="password"
              v-model="user.mk"
              v-bind:class="{ 'is-invalid': errors.matkhaumoi }"
              @blur=" errors.solan>0 ? validate():null"
              name="matkhaumoi"
              class="form-control"
              id="inputPasswordNew"
              placeholder="mật khẩu mới"
            />
              <div class="invalid-feedback" v-if="errors.matkhaumoi">
                {{ errors.matkhaumoi }}
              </div>
            </div>
          </div>
        <div class="form-group row justify-content-center">
          <label
          for="inputPassword" 
            class="col-sm-3 col-form-label"
            style="width: 160px"
            >Nhập lại mật khẩu</label
          >
          <span>:</span>
          <div class="col-sm-5">
            <input
            type="password"
            v-model="user.matkhau"
            v-bind:class="{ 'is-invalid': errors.matkhau }"
            @blur=" errors.solan>0 ? validate():null"
            name="matkhau"
            class="form-control"
            id="inputPassword"
            placeholder="nhập lại mật khẩu"
          />
            <div class="invalid-feedback" v-if="errors.matkhau">
              {{ errors.matkhau }}
            </div>
          </div>
        </div>
    
        <div class="form-group row justify-content-center mt-2">
          <label class="col-sm-3 col-form-label"></label>
          <div class="col-sm-5">
            <button type="submit" class="btn btn-primary">Cập nhật</button>
          </div>
        </div>
      </form>
      </div>
</template>
<script>
 import loginService from "../../services/login.services";
 import taikhoanService from "../../services/taikhoan.service";
 import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

export default {
  name: "doimatkhau",
  components: { Header, Sidebar },

  data() {
    return {
      dieuhuong:{doimatkhau:true},

      errors: {
        matkhaucu: "",
        matkhaumoi: "",
        matkhau: "",
      },
      
      user: {
        type:Object
      },
      
    };
    
  },
  
  methods: {
    validate() {
      let valid = true;
      this.errors = {
        matkcu: "",
        matkmoi: "",
        matkhau: "",
        solan:0
      };
      if (!this.user.mk) {
        this.errors.matkhaumoi = "Bạn cần nhập mật khẩu mới";
        valid = false;
      }
      if (!this.user.matkhau) {
        this.errors.matkhau = "Bạn cần nhập lại mật khẩu";
        valid = false;
      }
      if(this.user.mk!=this.user.matkhau){
        this.errors.matkhau = "mật khẩu nhập lại không khớp";
        valid = false;
      }
      return valid;
    },
   
      async checkLogin() {
      if (this.validate()) {
        let message= await taikhoanService.capnhatTK(this.user);
        if(message){
          this.$swal.fire("Đã cập nhật!", "", "success");
        }
      }
      else this.errors.solan++;
    },
  
    }
  }
</script>
<style scoped>
.btn-primary {
    background-color: #0000ff;
  }
  h1 {
    color: #0000ff;
  }


</style>
