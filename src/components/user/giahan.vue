<template>
    <div class="col-12">
        <userHeader class="mb-3"></userHeader>
        <Router-link :to="{ name: 'dsphieu' }" class="my-3" >
          <button class="btn btn-primary ">Danh sách phiếu gia hạn</button>
        </Router-link>
        <div class="mt-5">
            <h1 class="text-center mb-4">Đăng ký gia hạn </h1>
            <form class="pl-5">
                <div class="form-group row justify-content-evently ml-5 pl-5">
                  <div class="col-sm-3  pl-5 ml-5">
                    <label for="ngaybd" class="col-form-label" style="width: 120px"
                      >Ngày bắt đầu</label
                    >
                    <span>:</span>
                  </div>
                  <div class="col-sm-5 mx-0 px-0">
                    <input
                      type="date"
                      name="ngaybd"
                      class="form-control"
                      id="ngaybd"
                      v-model="giahan.ngaybd"
                      :min="hopdong.ngayktcgh"
                    />
                  </div>
                </div>
                <div class="form-group row justify-content-evently ml-5 pl-5">
                    <div class="col-sm-3  pl-5 ml-5">
                          <label for="ngaykt" class="col-form-label" style="width: 120px"
                        >Ngày kết thúc</label
                      >
                      <span>:</span>
                    </div>
                    <div class="col-sm-5 mx-0 px-0">
                        <input
                        type="date"
                        name="ngaykt"
                        class="form-control"
                        id="ngaykt"
                        :min="giahan.ngaybd"
                        :class="{ 'is-invalid': errors.ngayktgh }"
                        @blur="validate"
                        v-model="giahan.ngaykt"
                       
                      />
                      <div :class="{ 'invalid-feedback': errors.ngayktgh }">
                        {{ errors.ngayktgh }}
                      </div>
                    </div>
                  </div>
                  <!-- Button Gửi -->
                  <div class="form-group row justify-content-evently ml-5 pl-5">
                    <div class="col-sm-3  pl-5 ml-5">
                          <label  class="col-form-label" style="width: 120px"
                        ></label
                      >
                      
                    </div>
                    <div class="col-sm-5 mx-0 px-0">
                        <button class="btn btn-primary" @click="save">Gửi</button>
                    </div>
                </div>

              </form>

        </div>
        <userFooter class="mt-5"></userFooter>
    </div>
</template>
<script>
import userHeader from "./userHeader.vue";
import userFooter from "./userfooter.vue";
import phieugiahanService from '../../services/phieugiahan.services';
import hopdongService from '../../services/hopdong.service';
export default{
    name: "hoadon",
    components: { userHeader, userFooter },

  data() {
    return {
    
      hopdong:{type:Object},
      errors:{
        ngaybdgh:'',
        ngayktgh:''
      },
      giahan:{type:Object}
    };
  },
  async  created(){
    await this.layHD(); 
  },
  methods:{
    async layHD(){
      this.hopdong= await hopdongService.layHDK();
      this.giahan['ngaybd']=this.hopdong.ngayktcgh;
    },
    validate(){
      this.errors={
        ngaybdgh:'',
        ngayktgh:''
      };
      var valid=true;
      if (!this.giahan.ngaykt ) {
          this.errors.ngayktgh = "Ngày kết thúc thuê không được bỏ trống";
          valid=false;
        }
      return valid;

    },
    async save(){
      console.log(this.giahan);
      if(this.validate){
        var mes=await phieugiahanService.themPhieu(this.giahan);
       
      }
    } 

  }
}

</script>