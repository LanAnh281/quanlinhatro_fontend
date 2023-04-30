<template>
    <div class="col-12">
        <userHeader></userHeader>
        <div class="mt-5">
            <h1 class="text-center mb-4">Đăng ký gia hạn </h1>
            <form v-on:submit.prevent="save" class="pl-5">
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
                      />
                    </div>
                  </div>
                
                  <div class="form-group row justify-content-evently ml-5 pl-5">
                    <div class="col-sm-3  pl-5 ml-5">
                          <label  class="col-form-label" style="width: 120px"
                        ></label
                      >
                      
                    </div>
                    <div class="col-sm-5 mx-0 px-0">
                        <button class="btn btn-primary">Gửi</button>
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
export default{
    name: "hoadon",
    components: { userHeader, userFooter },

  data() {
    return {
      hoadon: {type: Object},
      khachhang:{type:Object},
      hopdong:{type:Object}
    };
  }
}

</script>