<template>
    <div class="col-12">
        <userHeader :headerProps="dieuhuong"></userHeader>
        <h1 class="my-3 text-center">Danh sách phiếu gia hạn </h1>
    <table class="table table-hover my-5">
        <thead>
          <tr>
            <th style="width: 140px" class="text-center">Mã phiếu</th>
            <th scope="col">Ngày bắt đầu</th>
            <th scope="col">Ngày kết thúc</th>
            <th scope="col">Trạng thái</th>
            <th scope="col" class="text-center">Chỉnh sửa</th>
          </tr>
        </thead>
        <tbody>
          
            <tr :key="index" v-for="(p, index) in phieu">
              <td style="width: 140px"  class="text-center">{{ p.maphieu }}</td>
              <td>{{ p.ngaybd }}</td>
              <td>{{ p.ngaykt }}</td>
              <td>{{ p.trangthai }}</td>
             <td class="text-center">          
                <fa icon="trash" style="color:red" @click="ondelete(p.maphieu)"></fa>
             </td>
            </tr>
          
          
        </tbody>
      </table>
      <userFooter class="mt-5"></userFooter>
    </div>
</template>
<script>
import userHeader from "./userHeader.vue";
import userFooter from "./userfooter.vue";
import phieugiahanService from "@/services/phieugiahan.services";
export default {
    name: "dsphieu",
    components: { userHeader, userFooter },
  data() {
    return {
      dieuhuong:{phieugiahan:true},

      capnhatphieu:{maphieu:''},
      phieu: { type: Array },
    };
  },
  created() {
    this.DSP();
  },
  methods: {
    async DSP() {
      this.phieu = await phieugiahanService.dsphieugh();
      this.phieu.map((item) => {
       
        if (item.trangthai == "0") {
          item.trangthai = "Đang xem xét";
        } else item.trangthai = "Đã xử lý";
      });
    },
    async ondelete(maphieu){
       
        this.$swal
        .fire({
          title: "Bạn có muốn xóa ?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            var mes= await phieugiahanService.xoaphieugh(maphieu);
              this.$swal.fire("Đã xóa!", "", "success");
            }
        }
        );
    }
  },
};
</script>
<style scoped>
input{
  display: none;
}
input .btn{
    width: 10px !important;
}
.style {
  padding: 1px;
  width: 16px;
  color: white;
  border-radius: 15px;
}


.info {
  background-color: rgb(93, 42, 245);
}

.trash {
  color: red;
}

</style>