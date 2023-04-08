<template>
  <div>
    <form @submit.prevent="checkLogin">
      <div class="form-group row">
        <label for="matk" class="col-sm-2 col-form-label">Mã Tài Khoản</label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="user.matk"
            v-bind:class="{ 'is-invalid': errors.matk }"
            @blur="validate()"
            name="matk"
            class="form-control"
            id="matk"
          />
          <div class="invalid-feedback" v-if="errors.matk">
            {{ errors.matk }}
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            v-model="user.matkhau"
            v-bind:class="{ 'is-invalid': errors.matkhau }"
            @blur="validate()"
            name="matkhau"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
          />
          <div class="invalid-feedback" v-if="errors.matkhau">
            {{ errors.matkhau }}
          </div>
        </div>
      </div>

      <!-- <router-link :to="{name:'admin'}"> -->
      <button class="btn btn-primary">Submit</button>

      <!-- </router-link> -->
    </form>
  </div>
</template>
<script>
import loginService from "../services/login.services";
export default {
  name: "login",
  data() {
    return {
      errors: {
        matk: "",
        matkhau: "",
      },
      trangthai: {
        message: "",
        token: "",
      },
      user: {
        matk: "",
        matkhau: "",
      },
    };
  },
  methods: {
    validate() {
      let valid = true;
      this.errors = {
        matk: "",
        matkhau: "",
      };
      if (!this.user.matk) {
        this.errors.matk = "Bạn cần nhập mã tài khoản";
        valid = false;
      }
      if (!this.user.matkhau) {
        this.errors.matkhau = "Bạn cần nhập mật khẩu";
        valid = false;
      }
      return valid;
    },
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      },
    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    },
    async checkLogin() {
      if (this.validate()) {
        this.trangthai = await loginService.KTDN(this.user);
        if (this.trangthai.message == "success") {
        this.setCookie('token',this.trangthai.token,1);//1 ngày
        
          this.$router.push({ name: "admin" });
        } else {
          this.$swal.fire({
            title: "Bạn đã đăng nhập thất bại",
            confirmButtonText: "OK",
          });
        }
      }
    },
  },
};
</script>
