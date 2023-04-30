<template>
    <div class="col-12">
        <userHeader></userHeader>
    <div class="border mt-5 px-5">
        <div class="text-center mt-5 mx-5 px-5">
            <h4>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h4>
            <h5>Độc lập - Tự do - Hạnh phúc</h5>
            <h3 class="mt-5 mb-4">HỢP ĐỒNG THUÊ NHÀ</h3>
        </div>
        <div>
            <i>Căn cứ luật Dân sự 33/2005/QH11, Luạt Nhà ở số 56/2005/QH11 và các văn bản hướng dẫn thi hành;</i> <br>
            <i>Căn cứ khả năng và nhua cầu của hai bên bên trong hợp đồng nay:</i> <br>
            <p class="mt-1">Hôm nay, ngày {{hopdong.ngaylap }}.  Chúng tôi bao gồm: </p>
            <p>Bên cho thuê(Bên A): {{nhatro.hoten}}</p>
            <p>Số CMND: {{nhatro.cccd}}</p>
            <p>Số điện thoại:{{nhatro.sdt}}</p>
            <p>{{nhatro.hoten}} là chủ sở hữu nhà ở và quyền sử dụng đất tại địa chỉ {{ nhatro.diachi }}.</p>
            <p>Hôm nay, ngày {{hopdong.ngaylap }} tại {{ nhatro.diachi }}, Chúng tôi bao gồm: </p>
            <p>Bên thuê(Bên B):{{ khachhang.hoten }} </p>
            <p>Số CMND: {{khachhang.cccd}}</p>
            <p>Số điện thoại:{{khachhang.sdt}}</p>
            <p> Hai bên đồng ý thỏa thuận với nội dung như sau </p>
            <h6>Điều 1: Thỏa thuận thuê</h6>
            <p>Bên A đồng ý cho bên B thuê và bên B đồng ý thuê  {{ hopdong.tenphong }} thuộc loại nhà phòng  {{ phong.tenloai }} thuộc dãy phòng trọ căn nhà số {{ nhatro.diachi }} </p>
            <p>Thời hạn hợp đồng thuê  bắt đầu từ ngày: {{ hopdong.ngaybd }} kết thúc ngày: {{ hopdong.ngaykt }} </p>
            <h6>Điều 2: Tiền thuê nhà trọ</h6>
            <p>-Giá tiền thuê nhà : {{phong.giaphong}} ngàn đồng</p>
            <p>Tiền thuê nhà bên B thanh toán cho bên A từ ngày 6 tây đầu mỗi tháng</p>
            <h6>Điều 3: Trách nhiệm bên A</h6>
            <p>Giao nhà, trang thiết bị đầy đủ cho bên B đúng ngày ký hợp đồng</p>
            <div class=" mr-5 mt-5  row justify-content-between">
                <div class="col-4">
                    <p></p>
                    <h6 class="mt-4 w-100" style="height: 50px;">Đại diện bên thuê</h6>
                     <p  style="height: 50px;" class="pl-5" ><i >(Đã ký)</i></p>
                    <p class="pl-2"> {{khachhang.hoten}} </p>
        
                </div>
                <div class="col-4  pl-5 pr-0 mr-0 ">
                    <p class="mb-1"><i>Ngày lập {{hopdong.ngaylap}}</i></p> 
                    <h6 class="w-100" style="height: 50px;">Đại diện bên cho thuê</h6>
                    <p  style="height: 50px;" class="pl-5" ><i >(Đã ký)</i></p>
                    <p class="pl-5">{{nhatro.hoten}}</p>
                </div>
            </div>
        </div>

    </div>
    <userFooter class="mt-5"></userFooter>
</div>
</template>
<script>
import userHeader from "./userHeader.vue";
import userFooter from "./userfooter.vue";
import khachhangServices from "../../services/khachhang.services";
import nhatroService from "@/services/nhatro.service";
import hopdongService from "../../services/hopdong.service";
import phongService from "../../services/phong.service";
import loaiPhongService from "../../services/loaiphong.service";

export default {
  name: "hopdongthue",
  components: { userHeader, userFooter },

  data() {
    return {
      khachhang: {type: Object},
      nhatro:{type:Object},
      hopdong:{type:Object},
      phong:{type:Object}
    };
  },
  async created(){
   await this.layKH();
   await this.layTTNT();
    await this.layHD();
    this.layPhong();
  },
  methods: {
    async layKH (){
        this.khachhang= await khachhangServices.layKT();
    },
    async layTTNT() {
      this.nhatro = await nhatroService.layTTNT();
      this.nhatro = this.nhatro[0];
    },
    async layHD(){
        this.hopdong= await hopdongService.layHDK()
       console.log(this.hopdong.ngaylap);
    },
    async layPhong(){
        this.phong= await phongService.layPhong(this.hopdong.maphong);
        this.phong=this.phong[0];
        let loai= await loaiPhongService.layLP(this.phong.maloai);
        console.log("loại", loai);
        this.phong['dientich']=loai.dientich;
        this.phong['giaphong']=loai.giaphong;
        this.phong['tenloai']=loai.tenloai;
    }
   
  },
};
</script>
<style scoped>
h6{
    font-weight: 500;
}
h6{
    font-weight: 600;
 
}
</style>