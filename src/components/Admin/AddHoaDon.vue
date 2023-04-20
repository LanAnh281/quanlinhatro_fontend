<template>
    <Sidebar class="col-2 px-0"></Sidebar>
    <div class="col-10 px-2">
        <Header :silderProps="tacvu.name"></Header>
        <h3 class="text-center my-5">
            {{ tacvu.name }}
        </h3>
        <div>
            <h4>Giá điện: {{hoadon.giadien}}  VND</h4>
            <h4>Giá nước: {{hoadon.gianuoc}} VND </h4>
          
        </div>
        <form @submit.prevent="save" class="pl-5">
            <div class="form-group row">
                <div class="col-sm-2 pr-0">
                  <label for="tenloai" class="col-form-label" style="width: 120px"
                    >Tên loại </label
                  >
                  <span>:</span>
                </div>
                <div class="col-sm-10">
                  <select id="tenloai" class="form-control" @change="tenloai">
                    <option :value="loaiphong.maloai"  selected>---{{loaiphong.tenloai}}--- </option>
                    <option
                      v-for="(lp, index) in loaiphong"
                      :key="index"
                      :value="lp.maloai"
                    >
                      {{ lp.tenloai }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-2 pr-0">
                  <label for="tenphong" class="col-form-label" style="width: 120px"
                    >Tên phòng </label
                  >
                  <span>:</span>
                </div>
                <div class="col-sm-10">
                  <select id="tenphong" class="form-control" @change="tenphong">
                    <option :value="phong.maphong"  selected>---{{phong.tenphong}}---  </option>
                    <option
                      v-for="(p, index) in phong"
                      :key="index"
                      :value="p.maphong"
                    >
                      {{ p.tenphong }}
                    </option>
                  </select>
                </div>
              </div>
              
              
            <div class="form-group row">
                <div class="col-sm-2 pr-0">
                    <label for="giaphong" class="col-form-label" style="width: 120px">Giá phòng</label>
                    <span>:</span>
                </div>
                <div class="col-sm-10">
                    <input type="text" class="form-control" 
                    id="giaphong"
                    disabled
                    v-model="hoadon.giaphong" />
                    <div>

                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2 pr-0">
                    <label for="dienmoi" class="col-form-label" style="width: 120px">Chỉ số điện mới</label>
                    <span>:</span>
                </div>
                <div class="col-sm-10">
                    <input type="number" @change="dientieuthu" 
                    class="form-control" 
                    v-model="hoadon.dienmoi"
                    id="dienmoi" 
                    />
                    <div>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2 pr-0">
                    <label for="nuocmoi" class="col-form-label" 
                    style="width: 120px">Chỉ số nước mới</label>
                    <span>:</span>
                </div>
                <div class="col-sm-10">
                    <input type="number" @change="nuoctieuthu"
                    class="form-control" 
                    v-model="hoadon.nuocmoi"
                    id="nuocmoi" 
                    min="0"/>
                    <div>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2 pr-0">
                    <label for="dientieuthu" class="col-form-label" 
                    style="width: 120px">Điện tiêu thụ</label>
                    <span>:</span>
                </div>
                <div class="col-sm-10">
                    <input type="number" 
                    class="form-control" 
                    disabled
                   
                    v-model="hoadon.dientieuthu"
                    id="dientieuthu" 
                    min="0"/>
                    <div>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-2 pr-0">
                    <label for="nuoctieuthu" class="col-form-label" 
                    style="width: 120px">Nước tiêu thụ</label>
                    <span>:</span>
                </div>
                <div class="col-sm-10">
                    <input type="number" 
                    class="form-control" 
                    disabled
                    v-model="hoadon.nuoctieuthu"
                    id="nuoctieuthu" 
                    min="0"/>
                    <div>
                    </div>
                </div>
            </div>
            <!-- Button -->
            <div class="my-2">
                <label for="tenloai" class="col-sm-2 col-form-label"></label>
                <button class="btn btn-primary col-2" style="height: 40px">{{ tacvu.submit }}</button>
            </div>
        </form>
    </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";
import diennuocServices from '../../services/giadiennuoc.services';
import loaiphongService from "../../services/loaiphong.service";
import phongService from "../../services/phong.service";
import ghidiennuocService from "../../services/ghidiennuoc.services";
import giadiennuocService from "../../services/giadiennuoc.services";

import hoadonService from "../../services/hoadon.services";

export default {
    name: "themhoadon",
    components: { Header, Sidebar },

    data() {
        return {
            loaiphong:[],
            phong:[],
            hoadon: { type: Object },
            tacvu: { name: '', submit: '' },
        }
    },
    async created() {
        this.hoadon['maphong']='';
        await this.layGia();
      
        await this.layLP();
        if(this.$route.params.mahd){
            this.tacvu = { name: 'CẬP NHẬT HÓA ĐƠN', submit: 'Cập nhật' };
            await this.layHD()
        } else{
            this.tacvu = { name: 'THÊM HÓA ĐƠN', submit: 'Thêm' }
        } 
    },
    methods: {
        async layGia(){
            this.hoadon= await diennuocServices.layGDN();
            this.hoadon= this.hoadon[this.hoadon.length-1];            
        },
        async layLP() {
            this.loaiphong = await loaiphongService.layDSLP();
        },
        async layHD(){
            let hd= await hoadonService.layHD(this.$route.params.mahd);
            this.hoadon['maphong']=hd[0].maphong;
            this.hoadon['mahd']=hd[0].mahd;
            this.hoadon['nam']=hd[0].nam;
            this.hoadon['thang']=hd[0].thang;
            let tenp= await phongService.layPhong(this.hoadon.maphong);
            
            this.phong.tenphong=tenp[0].tenphong
            this.phong.maloai=tenp[0].maloai;
            let loai= await loaiphongService.layLP(this.phong.maloai);
            this.loaiphong.tenloai=loai.tenloai;
            this.loaiphong.maloai=loai.maloai;
            this.hoadon.giaphong=loai.giaphong;
            this.layDN(this.hoadon.maphong);

        },
        async tenloai(loai){
            this.hoadon.maloai=loai.target.value;
            this.phong= await phongService.LayTTPTheoLoai(this.hoadon.maloai);
            // this.phong.filter((p,index)=>{
            //     console.log(index);
            //     console.log("mp:",p.maphong, this.hoadon.maphong);
            //     if(p.maphong==this.hoadon.maphong){
            //         this.phong.splice(index,1);
            //     }
            // })
            let gia= await loaiphongService.layLP(loai.target.value);
            this.hoadon.giaphong=gia.giaphong;
        },
        async tenphong(e){
            this.hoadon.maphong=e.target.value;
            this.layDN(e.target.value);
            
    },  
    async layDN(maphong){
        let dien= await ghidiennuocService.layDSDN(maphong);
            if(dien.length==0){
                this.hoadon.dienchisocu=0;
                this.hoadon.nuocchisocu=0;
            }
            else{
                this.hoadon.dienchisocu=dien[dien.length-1].dienchisocu;
                this.hoadon.nuocchisocu=dien[dien.length-1].nuocchisocu;
            }
    },
    dientieuthu(){
        this.hoadon.dientieuthu=this.hoadon.dienmoi-this.hoadon.dienchisocu;
    },
    nuoctieuthu(){
        this.hoadon.nuoctieuthu=this.hoadon.nuocmoi-this.hoadon.nuocchisocu;
        this.hoadon.tongtien=this.hoadon.nuoctieuthu*this.hoadon.gianuoc
        +this.hoadon.dientieuthu*this.hoadon.giadien
        +this.hoadon.giaphong;
    },
    async save(){
        if(this.$route.params.mahd){
            this.hoadon.trangthai='Chưa thanh toán';
            let thongdiep=await ghidiennuocService.chinhsuaDN(this.hoadon);
            let hd= await hoadonService.chinhsuaHD(this.$route.params.mahd,this.hoadon);

            console.log('chỉnh sửa hóa đơn', this.hoadon);
            if(hd.mes){
                this.$swal.fire({
                title: "Tạo thành công hóa đơn",
                confirmButtonText: "OK",
              });
            }
            return;
        }
        let mes= await ghidiennuocService.themDN(this.hoadon);
        if(mes.mes=='Phòng này đã được ghi điện nước'){
            this.$swal.fire({
            title: mes.mes,
            confirmButtonText: "OK",})
            
        }
        else{
            let hd= await hoadonService.themHD(this.hoadon);
            if(hd.mes){
                this.$swal.fire({
                title: "Tạo thành công hóa đơn",
                confirmButtonText: "OK",
              });
            }
        }
            
        
    }
}

}
</script>