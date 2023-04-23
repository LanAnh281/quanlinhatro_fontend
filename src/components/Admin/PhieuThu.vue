<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Phiếu thu'"></Header>
      <div class="p-3">
        <router-link :to="{ name: 'phieuthu.them',params:{mahd:`${hoadon.mahd}`} }" >
          <button class="btn btn-primary my-2">In Phiếu Thu</button>
        </router-link>
        <br>
        <i >&nbsp;{{ nhatro.tennhatro }}</i> <br />
        <i>SĐT &nbsp; {{ nhatro.sdt }}</i> <br />
        <i>Địa chỉ &nbsp;{{ nhatro.diachi }}</i
        ><br />
       

      </div>
      <div class="text-center p-3 my-3 row justify-content-center">
        <div class="col-6">
          <h2 class="my-2">Phiếu Thu Tiền Trọ</h2>
          <h4>Tháng {{ hoadon.thang }}/{{ hoadon.nam }}</h4>
  
        </div>
      </div>
      <div>
          <label>Họ tên</label> <span> &nbsp;  : {{khachhang.hoten}}</span><br>
          <label>Phòng</label> <span> &nbsp; : {{hoadon.tenphong}}</span>
      </div>
      <div>
        <table>
          <thead>
            <th>Nội dung</th>
            <th>Chỉ số đầu</th>
            <th>Chỉ số cuối</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </thead>
          <tbody>
            <tr>
              <th>Tiền phòng</th>
              <td></td>
              <td></td>
              <td></td>
              <td>{{ hoadon.giaphong }}</td>
              <td>{{ hoadon.giaphong }}</td>
            </tr>
            <tr>
              <th>Tiền Điện</th>
              <td>{{ hoadon.dienchisocu }}</td>
              <td>{{ hoadon.dienmoi }}</td>
              <td>{{ hoadon.dienmoi - hoadon.dienchisocu }}</td>
              <td>{{ hoadon.giadien }}</td>
              <td>
                {{ (hoadon.dienmoi - hoadon.dienchisocu) * hoadon.giadien }}
              </td>
            </tr>
            <tr>
              <th>Tiền Nước</th>
              <td>{{ hoadon.nuocchisocu }}</td>
              <td>{{ hoadon.nuocmoi }}</td>
              <td>{{ hoadon.nuocmoi -hoadon.nuocchisocu }}</td>
              <td>{{ hoadon.gianuoc }}</td>
              <td>{{ (hoadon.nuocmoi - hoadon.nuocchisocu) * hoadon.gianuoc }}</td>
            </tr>
            <tr>
              <th>Tổng tiền</th>
              <td colspan="4"></td>
              <td> {{hoadon.tongtien}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="p-5 mr-5  row justify-content-between">
          <div class="col-4">
              <p></p>
              <h5 class="w-100" style="height: 100px;">Đại diện bên thuê</h5>
              <p>...............................</p>
  
          </div>
          <div class="col-4 justify-items-end">
              <i>Ngày lập {{ ngaylap }}</i>
              <h5 class="w-100" style="height: 100px;">Đại diện bên cho thuê</h5>
              <p>..................................</p>
          </div>
      </div>
    </div>
 
</template>
<script>
   import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import hoadonServices from "../../services/hoadon.services";
import nhatroService from "../../services/nhatro.service";
import phongService from "../../services/phong.service";
import hopdongService from "../../services/hopdong.service";
import loaiphongService from "../../services/loaiphong.service";
import ghidiennuocServices from "../../services/ghidiennuoc.services";
import giadiennuocServices from "../../services/giadiennuoc.services";

export default {
  name: "phieuthu",
  components: { Header, Sidebar },

  data() {
    return {
      dieuhuong:{hoadon:true},
      ngaylap: "",
      nhatro: { type: Object },
      khachhang: { type: Object },
      hoadon: { type: Object },
      
    };
  },
  async created() {
    var today = new Date();
    this.ngaylap =
      today.getDate() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      today.getFullYear();
  
    await this.layTK();
    // let tt= await phieuthuService.themPT(this.hoadon.mahd);


  },
  methods: {
    async layTK() {
      this.nhatro = await nhatroService.layTTNT();
      this.nhatro = this.nhatro[0];

      this.hoadon = await hoadonServices.layHD(this.$route.params.mahd);
      this.hoadon = this.hoadon[0];
      let laygiaDN = await giadiennuocServices.layGDN();
      this.hoadon["giadien"] = laygiaDN[laygiaDN.length - 1].giadien;
      this.hoadon["gianuoc"] = laygiaDN[laygiaDN.length - 1].gianuoc;

      let hotenkhach = await hopdongService.layDSHD();
      hotenkhach.filter((ht, index) => {
        if (ht.maphong == this.hoadon.maphong) {
          this.khachhang.hoten = ht.hoten;
        }
      });
      let phong = await phongService.layPhong(this.hoadon.maphong);
      this.hoadon.tenphong = phong[0].tenphong;
      this.hoadon.maloai = phong[0].maloai;

      let laygia = await loaiphongService.layLP(this.hoadon.maloai);
      this.hoadon.giaphong = laygia.giaphong;

      let laytieuthu = await ghidiennuocServices.layDN(
        this.hoadon.maphong,
        this.hoadon
      );
    
     
      this.hoadon["dienchisocu"] = laytieuthu[0].dienchisocu;
      this.hoadon["dienmoi"] = laytieuthu[0].dienchisomoi;
      this.hoadon["nuocchisocu"] = laytieuthu[0].nuocchisocu;
      this.hoadon["nuocmoi"] = laytieuthu[0].nuocchisomoi;
      
    },
   
  },
} 
</script>
<style scoped>

table{
    display: table;
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border:1px solid black !important;
    border-collapse: collapse;
}
th{
    border:1px solid black !important;
    font-weight: bold;

}
td{
    border:1px solid black;
}
label {
  width: 140px;
}
</style>

