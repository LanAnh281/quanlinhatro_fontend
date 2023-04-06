<template>
    <table class="table">
        <thead>
          Danh sách loại phòng
          <tr>
            <th scope="col">Tên phòng</th>
            <th scope="col">Diện tích</th>
            <th scope="col">Giá phòng</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lp in phong" :key="lp.id">
            <td>{{ lp.tenloai }}</td>
            <td>{{ lp.dientich }}</td>
            <td>{{ lp.giaphong }}</td>
            <td>
              <!-- <fa :icon="['fab','trash']"></fa> -->
              <router-link :to="{ name: 'edit' }" class="mr-2" :LPProps="lp.id">
                <fa icon="info" class="style info"></fa>
              </router-link>
              <router-link :to="{ name: 'room' }" class="mr-2">
                <fa icon="edit"></fa>
              </router-link>
              <fa icon="trash" class="mr-2 style trash"></fa>
            </td>
          </tr>
        </tbody>
      </table>
</template>
<script>
import phongService from '../../services/phong.service';
export default{
    name:"Room",
    components:{},
    props:[
        IDloaiphongProps,
    ],
    data(){
        const layTTPTheoLoai = async () => {
      try {
        this.phong = await phongService.layTTPTheoLoai(IDloaiphongProps);
      } catch (error) {
        console.log(error);
      }
    };
        return {
            phong:layTTPTheoLoai,
        }
    },

}
</script>

<style>

</style>