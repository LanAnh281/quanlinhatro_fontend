<template>
    <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Đổi mật khẩu'"></Header>
    <form @submit.prevent="checkLogin" class="background mt-5">
        <h1 class="text-center mt-5 mb-3">Đổi mật khẩu</h1>
        <div class="form-group row justify-content-center">
            <label
            for="inputPasswordOdd" 
            class="col-sm-3 col-form-label"
            style="width: 160px"
              >Mật khẩu cũ</label
            >
            <span>:</span>
            <div class="col-sm-5">
              <input
              type="password"
              v-model="user.matkhaucu"
              v-bind:class="{ 'is-invalid': errors.matkhaucu }"
              @blur="validate()"
              name="matkhaucu"
              class="form-control"
              id="inputPasswordOdd"
              placeholder="mật khẩu cũ"
            />
              <div class="invalid-feedback" v-if="errors.matkhaucu">
                {{ errors.matkhaucu }}
              </div>
            </div>
          </div>
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
              v-model="user.matkhaumoi"
              v-bind:class="{ 'is-invalid': errors.matkhaumoi }"
              @blur="validate()"
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
            @blur="validate()"
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
    
        <div class="form-group row justify-content-center">
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
 import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

export default {
  name: "doimatkhau",
  components: { Header, Sidebar },

  data() {
    return {
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
      };
      if (!this.user.matkhaucu) {
        this.errors.matkhaucu = "Bạn cần nhập mật khẩu cũ";
        valid = false;
      }
    //   else if(){

    //   }
      if (!this.user.matkhaumoi) {
        this.errors.matkhaumoi = "Bạn cần nhập mật khẩu mới";
        valid = false;
      }
      if (!this.user.matkhau) {
        this.errors.matkhau = "Bạn cần nhập lại mật khẩu";
        valid = false;
      }
      if(this.user.matkhaumoi!=this.user.matkhau){
        this.errors.matkhau = "mật khẩu nhập lại không khớp";
        valid = false;
      }
      return valid;
    },
   
      async checkLogin() {
      if (this.validate()) {
       
      }
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
