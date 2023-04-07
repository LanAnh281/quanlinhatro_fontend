<template>
    <h1>Hell0 {{loaiphong}}</h1>
   <form 
   v-on:submit="capnhatLP"
  >
    <h3>Chỉnh sửa loại phòng</h3>
        <div class="form-group">
          <label for="tenloai">Tên loại</label>
          <input type="text" v-model="loaiphong.tenloai" class="form-control" id="tenloai" aria-describedby="emailHelp" placeholder="tên loại phòng">
        </div>
        <div class="form-group">
            <label for="dientich">Diện tích</label>
            <input type="number" v-model="loaiphong.dientich" class="form-control" id="dientich" min="20" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
        <div class="form-group">
          <label for="giaphong">Giá phòng</label>
          <input type="number" v-model="loaiphong.giaphong" class="form-control" id="giaphong" placeholder="giá phòng">
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
</template>
<script>

import * as yup from "yup";
import {Form,Field,ErrorMessage} from 'vee-validate';
import loaiphongService from '../../services/loaiphong.service';
export default{
    name: "edit loaiphong",
    components:{
        Form,
        Field,
        ErrorMessage,
    },

    props:{
        // maloai: ,
        // loaiphong:{type:Object,required:true}
    },
    data(){
       
        
        return {
            maloai:this.$route.params.maloai,
            loaiphong:null,
            message:"",
            
        };
    },
    methods:{
         async layLP(maloai){
            try {
                this.loaiphong = await loaiphongService.layLP(maloai);
            } catch (error) {
                console.log(error);
            }
        },
       async capnhatLP(data){
            try {
                r
                this.loaiphong=await loaiphongService.capNhatLP(this.loaiphong.maloai,this.loaiphong);
                console.log(this.loaiphong);
                this.message="Cập nhật thành công loại phòng ";
            } catch (error) {
                console.log(err);
            }
        },

    },
    created(){
        this.layLP(this.maloai);
    }
}
</script>
<style>

</style>