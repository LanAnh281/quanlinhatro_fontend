<template>
    <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Phiếu thu'"></Header>
    <h3 class="text-center mt-5 mb-3">Phiếu thu</h3>

    <table class="table table-hover mt-2">
        <thead>
          <tr>
            <th>Mã hóa đơn</th>
            <th scope="col">Mã phiếu thu</th>
            <th scope="col">Ngày thu</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(pt, index) in phieuthu">
            <td>{{ pt.mahd }}</td>
            <td class="text-left">{{ pt.mapt }}</td>
            <td>{{ pt.ngaythu }}</td>
           
            <td>
             
            &nbsp;
              <router-link
                :to="{
                  name: '',
                  params: {},
                }"
              >
                <fa icon="edit"></fa>
              </router-link>
              &nbsp;
              <!-- <router-link :to="{ name: '' }"> -->
              <fa
                icon="trash"
                class="mr-2 style trash"
                v-on:click="onDelete(hd.mahd)"
              ></fa>
              <!-- </router-link> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
   import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

import hoadonService from "@/services/hoadon.services";
import phieuthuService from "@/services/phieuthu.services";

export default {
  name: "phieuthu",
  components: { Header, Sidebar },

  data() {
    return {
      hoadon: { type: Object },
      phieuthu:{type:Object}
    };
  },
  async created (){
   await this.layPT();
  },
  methods:{
   async layPT(){
    this.phieuthu=await phieuthuService.layPT(this.$route.params.mahd);
    console.log(this.phieuthu);

    }
  }
} 
</script>