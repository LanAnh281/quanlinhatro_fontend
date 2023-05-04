<template >
  <div class="dangnhap col-12">
    <header class="mt-3 mb-5 px-2">
      <img src="../assets/img/logo.PNG" />
    </header>
  
    <form @submit.prevent="checkLogin" class="background  form-d mt-5">
      <h1 class="text-center mt-5 mb-5">ĐĂNG NHẬP</h1>
      <div class="form-group row justify-content-center mt-2">
        <label
          for="matk"
          class="col-sm-2 col-form-label"
          style="width: 140px"
          >Mã tài khoản</label
        >
        <span>:</span>
        <div class="col-sm-5">
          <input
          type="text"
          v-model="user.matk"
          v-bind:class="{ 'is-invalid': errors.matk }"
          @blur=" errors.solan>0 ? validate():null"
          name="matk"
          class="form-control"
          id="matk"
          placeholder="mã tài khoản"
        />
        <div class="invalid-feedback" v-if="errors.matk">
          {{ errors.matk }}
        </div>
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label
        for="inputPassword" 
          class="col-sm-2 col-form-label"
          style="width: 140px"
          >Mật khẩu</label
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
          placeholder="mật khẩu"
        />
          <div class="invalid-feedback" v-if="errors.matkhau">
            {{ errors.matkhau }}
          </div>
        </div>
      </div>
  
      <div class="form-group row justify-content-center">
        <label class="col-sm-2 col-form-label"></label>
        <div class="col-sm-5 mt-2">
          <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </div>
      </div>
    </form>
    <footer class="row m-0 justify-content-around">
      <div class="col-8 mx-2 my-4">
        <h6><fa icon="home"></fa> &nbsp;
          Nhà trọ: {{nhatro.tennhatro}}</h6>
        <h6> <fa icon="phone"></fa> &nbsp; SĐT: {{nhatro.sdt}} ({{ nhatro.hoten }})</h6>
        <h6> <fa icon="map"></fa> &nbsp; Địa chỉ: {{nhatro.diachi}}</h6>

      </div>
      <div class="col-1 my-4" style="width:70px">
        <img src="../assets/img/logo.PNG"  style="height:80px;object-fit:cotain">
      </div>
    </footer>
  </div>
</template>
<script>
 import loginService from "../services/login.services";
 import nhatroService from "../services/nhatro.service";

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
      quyen:{
        message:'',
      },
      nhatro:{type:Object}
    };
    
  },
  created(){
    this.layNhaTro();
  },
  methods: {
    async layNhaTro (){
      this.nhatro=await nhatroService.layTTNT();
      this.nhatro=this.nhatro[0];
    },
    validate() {
      let valid = true;
      this.errors = {
        matk: "",
        matkhau: "",
        solan:0
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
          this.quyen= await loginService.Quyen();
          if(this.quyen.message=='chutro')
            this.$router.push({ name: "admin" });
          else 
          this.$router.push({ name: "user" });

        } else {
          this.$swal.fire({
            title: "Bạn đã đăng nhập thất bại",
            confirmButtonText: "OK",
          });
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

.dangnhap {
  margin: 0;
  height: 100vh;
  background-image: url(../assets/img/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  position: relative;
}


img[src$="logo.PNG"] {
  width: 70px;

}


footer {
  background-color: #c0c0c0;
  padding: 0;
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 130px;
  
}
</style>
