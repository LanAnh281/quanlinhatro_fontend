<template>
  
  <div class="col-12">
    <userHeader></userHeader>
    <div class="my-5">
      <h1 class="text-center">Thông tin khách hàng</h1>
      <table class="table table-hover mt-5">
      
          <tr>
            <th>Họ tên</th>
            <td>
              <input type="text" v-model="khachhang.hoten" id="hoten">

            </td>
            <td>
              <fa icon="edit" @click="myfunction('hoten')"></fa>
            </td>
          </tr>
          <tr>
            <th >SĐT</th>
            <td>
              <input type="text" v-model="khachhang.sdt" id="sdt">
            </td>
            <td>
                <fa icon="edit" @click="myfunction('sdt')"></fa>
            </td>
          </tr>
          <tr>
            <th >Quê quán</th>
            <td>
              <input type="text" v-model="khachhang.quequan" id="quequan">

            </td>
            <td>
              <fa icon="edit" @click="myfunction('quequan')"></fa>
            </td>
          </tr>
         
          <tr>
            <th >Nghề nghiệp</th>
            <td>
              <input type="text" v-model="khachhang.nghenghiep" id="nghenghiep">

            </td>
            <td>
              <fa icon="edit" @click="myfunction('nghenghiep')"></fa>
            </td>
          </tr>
            
          
      </table>
      <button class="btn btn-primary float-right mr-5 mb-5" @click="save()" >Lưu</button>
    </div>
    <userFooter class="mt-5"></userFooter>
  </div>
</template>
<script>
import userHeader from "./userHeader.vue";
import userFooter from "./userfooter.vue";
import khachhangServices from "../../services/khachhang.services";
export default {
  name: "userdoimatkhau",
  components: { userHeader, userFooter },

  data() {
    return {
      khachhang: {type: Object},
    };
  },
  created(){
    this.layKH();
  },
  methods: {
    async layKH (){
        this.khachhang= await khachhangServices.layKT();
    },
    myfunction(id) {
      document.getElementById(`${id}`).focus();  
    },
    async save(){
      
      let mes=await khachhangServices.chinhsuaKH(this.khachhang.STT, this.khachhang);
     
    }
  },
};
</script>
<style>
th{
  font-weight: bold;
}
input{
  border: none;
}
</style>