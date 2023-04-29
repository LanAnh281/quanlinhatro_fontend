<template>

  <div class="col-12">
    <userHeader></userHeader>
    <div>
      <h1>Thông tin khách hàng</h1>
      <table class="table table-hover mt-2">
      
          <tr>
            <th>Họ tên</th>
            <th>{{khachhang.hoten}}</th>
            <td>
                <fa icon="edit"></fa>
            </td>
          </tr>
          <tr>
            <th >SĐT</th>
            <th>{{khachhang.sdt}}</th>
            <td>
                <fa icon="edit"></fa>
            </td>
          </tr>
          <tr>
            <th >Quê quán</th>
            <th>{{khachhang.quequan}}</th>
            <td>
                <fa icon="edit"></fa>
            </td>
          </tr>
         
          <tr>
            <th >Nghề nghiệp</th>
            <th>{{khachhang.nghenghiep}}</th>
            <td>
                <fa icon="edit"></fa>
            </td>
          </tr>
            
            
          <tr>
            <th >Quê quán</th>
            <th>{{khachhang.quequan}}</th>
            <td>
                <fa icon="edit"></fa>
            </td>
          </tr>
      </table>
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
    }
  },
};
</script>
