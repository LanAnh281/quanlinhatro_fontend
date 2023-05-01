<template>
  <h3 class="text-center my-2">DANH SÁCH HỢP ĐỒNG</h3>
  <router-link :to="{ name: 'hopdong.them' }">
    <button class="btn btn-primary">+</button>
  </router-link>
  <table class="table table-hover mt-2">
    <thead>
      <tr>
        <th style="width: 140px">Mã hợp đồng</th>
        <th scope="col">Khách hàng</th>
        <th scope="col">Tên phòng</th>
        <th scope="col">Ngày bắt đầu</th>
        <th scope="col">Ngày kết thúc</th>
        <!-- <th scope="col"></th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="hd in hopdong" :key="hd.mahd">
        <td style="width: 140px" class="text-center">{{ hd.mahd }}</td>
        <td class="text-left">{{ hd.hoten }}</td>
        <td>{{ hd.tenphong }}</td>
        <td>{{ hd.ngaybd }}</td>
        <td>{{ hd.ngaykt }}</td>

        <td>
          <!-- <fa :icon="['fab','trash']"></fa> -->
          <!-- <router-link :to="{ name: '' }" class="mr-2">
            <fa icon="info" class="style info"></fa>
          </router-link> -->

          <!-- <router-link
            :to="{
              name: 'hopdong.chinhsua',
              params: { mahd: `${hd.mahd}` },
            }"
          >
            <fa icon="edit"></fa>
          </router-link> -->
          &nbsp;
          <!-- <fa icon="trash" @click="onDelete(hd.mahd)" class="mr-2 style trash"></fa> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import hopdongService from "@/services/hopdong.service";
export default {
  name: "HopDong",
  components: [],
  data() {
    return {

      hopdong: { type: Array },
    };
  },
  created() {
    this.layDSHD();
  },
  methods: {
    async layDSHD() {
      this.hopdong = await hopdongService.layDSHD();
      var today = new Date();
      today= 
   
      ("0" + (today.getMonth() + 1)).slice(-2);
      var ngayhientai= new Date();
      ngayhientai=  ngayhientai.getDate();
      this.hopdong = this.hopdong.filter((hd, index) => {
        // console.log(hd.thangkt,today,hd.thangkt>today);
       if (hd.thangkt > today)
        return hd.thangkt > today;
      else if(hd.thangkt == today){
        // console.log(hd.ngaykthuc ,":",ngayhientai,hd.ngaykt>=ngayhientai);

          if(hd.ngaykthuc >=ngayhientai) return hd.ngaykthuc>=ngayhientai;
        }
      });
     
    },
    // async onDelete(mahd){
    //   this.$swal
    //     .fire({
    //       title: `Bạn có muốn xóa hợp đồng ${mahd}`,
    //       showDenyButton: false,
    //       showCancelButton: true,
    //       confirmButtonText: "OK",
    //     })
    //     .then( async(result) => {
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         let mes= await hopdongService.xoaHD(mahd);
    //         this.$swal.fire("Đã xóa!", "", "success");
    //         this.layDSHD();
    //       }
    //     });

    // }
  },
};
</script>

<style scoped>
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
