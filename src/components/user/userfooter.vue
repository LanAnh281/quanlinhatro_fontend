<template>
  
    <footer class="row  justify-content-around">
        <div class="col-8 mx-2 my-4">
          <h6><fa icon="home"></fa> &nbsp;
            Nhà trọ: {{nhatro.tennhatro}}</h6>
          <h6> <fa icon="phone"></fa> &nbsp; SĐT: {{nhatro.sdt}} ({{ nhatro.hoten }})</h6>
          <h6> <fa icon="map"></fa> &nbsp; Địa chỉ: {{nhatro.diachi}}</h6>
  
        </div>
        <div class="col-1 my-4" style="width:70px">
          <img src="../../assets/img/logo.PNG"  style="height:80px;object-fit:cotain">
        </div>
      </footer>
</template>
<script>
import nhatroService from '../../services/nhatro.service';

export default{
    name:"userFooter",
    data(){
        return {
            nhatro:{type:Array}
        }
    },
    created(){
        this.layNT();
    },
    methods:{
        async layNT(){
            this.nhatro= await nhatroService.layTTNT();
            this.nhatro=this.nhatro[0];
        }
    }
}
</script>
<style scoped>
footer {
    background-color: #c0c0c0;
    padding: 0;
 
    width: 100%;
    bottom: 0px;
    height: 130px;
    
  }
</style>