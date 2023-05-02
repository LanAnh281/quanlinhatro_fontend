<template>
  <Sidebar class="col-2 px-0" :dieuhuongProps="dieuhuong"></Sidebar>
    <div class="col-10 px-2">
      <Header :silderProps="tacvu.name"></Header>
    <form v-on:submit.prevent="save" class="pl-5">
      <h3 class="text-center my-5">{{tacvu.name}}</h3>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenloai" class="col-form-label" style="width: 120px"
            >Tên loại</label
          >
          <span>:</span>
        </div>   
        <div class="col-sm-10">

             <input class=" form-control"
          type="text"
          v-model="roomtype.tenloai"
          v-bind:class="{ 'is-invalid': errors.tenloai && errors.solan>0  }"
          @blur="errors.solan>0 ? validate(): null"
          name="tenloai"
         
          id="tenloai"
          aria-describedby="tên loại"
          placeholder="tên loại phòng"
        />
        <div class="invalid-feedback" v-if="errors.tenloai">
          {{ errors.tenloai }}
        </div>
        </div>

      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="dientich" class="col-form-label" style="width: 120px"
            >Diện tích</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          
        <input class="form-control"
          type="number"
          v-model="roomtype.dientich"
          v-bind:class="{ 'is-invalid': errors.dientich && errors.solan>0 }"
          @blur="errors.solan>0 ? validate():null"
          name="dientich"
          id="dientich"
         
          placeholder="diện tích loại phòng"
        />
        <div class="invalid-feedback" v-if="errors.dientich && errors.solan>0">
          {{ errors.dientich }}
        </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="giaphong" class="col-form-label" style="width: 120px"
            >Giá phòng</label
          >
          <span>:</span>
        </div>  
        <div class="col-sm-10">
        
        <input class="form-control"
          type="number"
          v-model="roomtype.giaphong"
          v-bind:class="{ 'is-invalid': errors.giaphong && errors.solan>0}"
          @blur="errors.solan>0 ? validate():null"
          
          name="giaphong"
          id="giaphong"
          placeholder="giá phòng"
        /><div class="invalid-feedback" v-if="errors.giaphong && errors.solan>0">
          {{ errors.giaphong }}
        </div>
        </div>
        
      </div>

      <div class="my-2">
        <label class="col-sm-2 col-form-label"></label>
        <button class="btn btn-primary col-2" style="height: 40px">
          {{ tacvu.submit }}
        </button>
      </div>    </form>
  </div>
</template>
<script>
import loaiphongService from "../../services/loaiphong.service";
import Header from './Header.vue';
import Sidebar from './sidebar.vue';


export default {
  name: "AddRoomType",
  components: {Header,Sidebar },
  data() {
    return {
      dieuhuong:{loaiphong:true},

      errors: {
        solan:0,
        tenloai: "",
        giaphong: "",
        dientich: "",
      },
      roomtype: {
        tenloai: "",
        giaphong: "",
        dientich: "",
      },
      tacvu:{
        name:'',
        submit:''
      }
    };
  },
  created() {
    let lpID = this.$route.params.maloai;
    
    if (this.$route.params.maloai) {
      this.getRoomType(lpID);
      
      this.tacvu.name='Cập nhật loại phòng';
      this.tacvu.submit='Cập nhật';
     return;
    }
    this.tacvu={name:'Thêm loại phòng', submit:'Thêm'};

  },
  methods: {
    validate() {
      let isvalid = true;
      this.errors = {
        solan:0,
        tenloai: "",
        giaphong: "",
        dientich: "",
      };
      if (!this.roomtype.tenloai) {
        this.errors.tenloai = "Tên loại không được trống";
        isvalid = false;
      }
      if (!this.roomtype.dientich) {
        this.errors.dientich = "Diện tích không được trống";
        isvalid = false;
      } else if (!this.isNumber(this.roomtype.dientich)) {
        this.errors.dientich = "Diện tích phải là 1 con số";
        isvalid = false;
      }
      if (!this.roomtype.giaphong) {
        
        this.errors.giaphong = "Giá phòng không được trống";
        // console.log(this.errors.giaphong);
        isvalid = false;
      }
      return isvalid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    async save() {
      if(!this.validate()){
        this.errors.solan++;
      }
      
      else if (this.validate()) {

        // console.log(this.roomtype);
        if (this.$route.params.maloai) {
          this.$swal
        .fire({
          title: "Bạn có cập nhật loại phòng ?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            await loaiphongService
            .capNhatLP(this.$route.params.maloai, this.roomtype);
              this.$swal.fire("Đã cập nhật!", "", "success");
            
          }
        });
        }
         else {
            await loaiphongService.themLP(this.roomtype)
            .then((res) => {
              this.$swal.fire("Đã thêm!", "", "success");
            })
          }
        
        
      }
    },
    async getRoomType(lpID) {
      this.roomtype = await loaiphongService.layLP(lpID);
      
    },
  },
};
</script>
