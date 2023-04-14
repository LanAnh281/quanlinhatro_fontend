<template>
  <Sidebar class="col-2 px-0"></Sidebar>
    <div class="col-10 px-2">
      <Header></Header>
     
    <form v-on:submit.prevent="save" class="pl-5">
      <h3 class="text-center my-5">Thông tin loại phòng</h3>
      <div class="form-group">
        <label for="tenloai">Tên loại</label>
        <input
          type="text"
          v-model="roomtype.tenloai"
          v-bind:class="{ 'is-invalid': errors.tenloai }"
          @blur="validate()"
          name="tenloai"
          class="form-control"
          id="tenloai"
          aria-describedby="emailHelp"
          placeholder="tên loại phòng"
        />
        <div class="invalid-feedback" v-if="errors.tenloai">
          {{ errors.tenloai }}
        </div>
      </div>
      <div class="form-group">
        <label for="dientich">Diện tích</label>
        <input
          type="number"
          v-model="roomtype.dientich"
          v-bind:class="{ 'is-invalid': errors.dientich }"
          @blur="validate()"
          class="form-control"
          name="dientich"
          id="dientich"
          min="20"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <div class="invalid-feedback" v-if="errors.dientich">
          {{ errors.dientich }}
        </div>
      </div>
      <div class="form-group">
        <label for="giaphong">Giá phòng</label>
        <input
          type="number"
          v-model="roomtype.giaphong"
          v-bind:class="{ 'is-invalid': errors.giaphong }"
          @blur="validate()"
          class="form-control"
          name="giaphong"
          id="giaphong"
          placeholder="giá phòng"
        />
        <div class="invalid-feedback" v-if="errors.giaphong">
          {{ errors.giaphong }}
        </div>
      </div>

      <button class="btn btn-primary">Submit</button>
    </form>
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
      errors: {
        tenloai: "",
        giaphong: "",
        dientich: "",
      },
      roomtype: {
        tenloai: "",
        giaphong: "",
        dientich: "",
      },
    };
  },
  created() {
    let lpID = this.$route.params.maloai;
    
    if (lpID) {
      this.getRoomType(lpID);
    }
  },
  methods: {
    validate() {
      let isvalid = true;
      this.errors = {
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
        isvalid = false;
      }
      return isvalid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    async save() {
      if (this.validate()) {
        console.log(this.roomtype);
        if (this.$route.params.maloai) {
          console.log('router',this.$route.params.maloai);
          await loaiphongService
            .capNhatLP(this.$route.params.maloai, this.roomtype)
            .then((res) => {
              this.$router.push({ name: "admin" });
              return;
            });
            return;
        } else {
          console.log('add');
          await loaiphongService.themLP(this.roomtype).then((res) => {
            this.$router.push({ name: "admin" });
            return;
          });
        }
      }
    },
    async getRoomType(lpID) {
      this.roomtype = await loaiphongService.layLP(lpID);
      console.log(this.roomtype);
      
    },
  },
};
</script>
