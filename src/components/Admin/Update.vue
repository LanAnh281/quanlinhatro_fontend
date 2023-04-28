<template>
    <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
    <div class="col-10 px-2">
      <Header :silderProps="'Cập nhật nhà trọ'"></Header>
      <form v-on:submit.prevent="save" class="pl-5">
        <h3 class="text-center my-5">Cập nhật nhà trọ</h3>
        <div class="form-group row">
            <div class="col-sm-2 pr-0">
              <label for="hoten" class="col-form-label" style="width: 120px"
                >Chủ trọ</label
              >
              <span>:</span>
            </div>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="nhatro.hoten"
                name="hoten"
                class="form-control"
                id="hoten"
              />
            </div>
          </div>
        <div class="form-group row">
          <div class="col-sm-2 pr-0">
            <label for="tennhatro" class="col-form-label" style="width: 120px"
              >Tên nhà trọ</label
            >
            <span>:</span>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              v-model="nhatro.tennhatro"
              name="tennhatro"
              class="form-control"
              id="tennhatro"
            />
          </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-2 pr-0">
              <label for="sdt" class="col-form-label" style="width: 120px"
                >SĐT</label
              >
              <span>:</span>
            </div>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="nhatro.sdt"
                name="sdt"
                class="form-control"
                id="sdt"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-2 pr-0">
              <label for="diachi" class="col-form-label" style="width: 120px"
                >Địa chỉ</label
              >
              <span>:</span>
            </div>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="nhatro.diachi"
                name="diachi"
                class="form-control"
                id="diachi"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-2 pr-0">
              <label for="giadien" class="col-form-label" style="width: 120px"
                >Giá điện</label
              >
              <span>:</span>
            </div>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="giadiennuoc.giadien"
                name="giadien"
                class="form-control"
                id="giadien"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-2 pr-0">
              <label for="gianuoc" class="col-form-label" style="width: 120px"
                >Giá nước</label
              >
              <span>:</span>
            </div>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="giadiennuoc.gianuoc"
                name="gianuoc"
                class="form-control"
                id="gianuoc"
              />
            </div>
          </div>
        <div class="my-2">
          <label class="col-sm-2 col-form-label"></label>
          <button class="btn btn-primary col-2" style="height: 40px">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import nhatroService from "@/services/nhatro.service";
import giadiennuocService from "../../services/giadiennuoc.services";

export default{
    name:"update",
    components: { Header, Sidebar },

    data(){
        return{
            dieuhuong:{nhatro:true},
            nhatro: {type:Object},
            giadiennuoc:{type: Object},
        }
    },
    async created() {
        this.laynhatro();
        this.layGia();
    },
    methods:{
        async laynhatro (){
            this.nhatro= await nhatroService.layTTNT();
            this.nhatro=this.nhatro[0];
        },
        async layGia(){
            this.giadiennuoc= await giadiennuocService.layGDN();
            this.giadiennuoc= this.giadiennuoc[this.giadiennuoc.length-1];
        },
    async save() {
     
        let message = await nhatroService.chinhsuaNT(
          this.nhatro
        );
        await giadiennuocService.themGDN(this.giadiennuoc);
        this.$swal.fire({
          title: "Cập nhật thành công",
          confirmButtonText: "OK",
        });
      
    },

    }
   
}
</script>