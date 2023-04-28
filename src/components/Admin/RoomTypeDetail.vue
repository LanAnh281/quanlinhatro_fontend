<template>
  <Sidebar class="col-2 px-0 " :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Chi tiết loại phòng'"></Header>
    <h3 class="text-center  mt-3 mb-3">Chi tiết loại phòng</h3>
    <div  class='mx-5'>
      <p><span>Tên loại:</span> {{ loaiphong.tenloai }}</p>
      <p><span>Diện tích:</span> {{ loaiphong.dientich }} m<sup>2</sup></p>
      <p><span>Giá phòng:</span> {{ loaiphong.giaphong }} ngàn đồng</p>
     
    </div>
  
    <router-link :to="{ name: 'phong.them' }" >
      <button class="btn btn-primary mb-2 mx-5" title="thêm">+</button>
    </router-link>
    <table class="table table-hover mt-2 mx-5 text-center">
      <thead>
        <tr>
          <th scope="col">Tên phòng</th>
          <th scope="col">Trạng thái</th>
          <!-- <th scope="col" class="text-center">Chi tiết</th> -->
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(p, index) in phong">
          <td>{{ p.tenphong }}</td>
          <td>{{ p.trangthai }}</td>
          <!-- <td class="text-center">
            <router-link
                :to="{
                  name: '',
                  params: {  },
                }"
              >
                <fa icon="info" class="style info"></fa>
              </router-link>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import phongService from "../../services/phong.service";
import loaiphongService from "../../services/loaiphong.service";
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";
export default {
  name: "phong",
  components: { Header, Sidebar },

  data() {
    return {
      dieuhuong:{loaiphong:true},

      phong: [],
      loaiphong: { type: Object },
    };
  },
  created() {
    let maloai = this.$route.params.maloai;
    if (maloai) {
      this.layDSP(maloai);
    }
  },
  methods: {
    async layDSP(maloai) {
      this.loaiphong = await loaiphongService.layLP(maloai);
      this.phong = await phongService.LayTTPTheoLoai(maloai);
      if (this.phong.length > 0) {
        this.phong.map((phong) => {
          if (phong.trangthai == 1) phong.trangthai = "Đã thuê";
          else phong.trangthai = "chưa thuê";
        });
      } else {
        this.$swal
          .fire({
            title: "Loại phòng này chưa có phòng ",
            confirmButtonText: "OK",
          })
          
      }
    },
    async toggle(maphong,tt,maloai) {
        console.log(maphong);
        let ob={trangthai:''} ;
        if(tt=='Đã thuê'){
            let ob={trangthai:'0'} ;
            await phongService.chinhsuaPhong(maphong,ob);
            this.layDSP(this.$route.params.maloai);
            console.log('đã thuê->đã thuê')

        }
        else {
            let ob={trangthai:'1'} ;
            console.log(ob);
            phongService.chinhsuaPhong(maphong,ob);
            this.layDSP(this.$route.params.maloai);

            console.log('chưa thuê->đã thuê')

        }
    },
    // async onDelete(maphong){
    //   console.log('xóa');
    //   this.$swal
    //     .fire({
    //       title: "Bạn có muốn xóa ?",
    //       showDenyButton: false,
    //       showCancelButton: true,
    //       confirmButtonText: "OK",
    //     })
    //     .then(async (result) => {
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         this.thongbao = await phongService.xoaPhong(maphong);
    //         this.$swal.fire("Đã xóa!", "", "success");
    //         this.layDSP( this.$route.params.maloai);
    //       }
    //     });
    // }
  },
};
</script>
<style scoped>
a:hover{
  background-color: transparent;
}
.trash {
  color: red;
}
.table{
  width: 700px;
  border-collapse: collapse;  border:1px solid black;

  
}
th{
  font-weight: bold;
  border:1px solid black !important;

}
td{
  border:1px solid black;
}
</style>
