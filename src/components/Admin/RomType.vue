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
      <tr v-for="lp in loaiphong" :key="lp.id">
        <td>{{ lp.tenloai }}</td>
        <td>{{ lp.dientich }}</td>
        <td>{{ lp.giaphong }}</td>
        <td>
          <!-- <fa :icon="['fab','trash']"></fa> -->
          <router-link :to="{ name: 'hopdong' }" class="mr-2" :LPProps="lp.id">
            <fa icon="info" class="style info"></fa>
          </router-link>
          <router-link :to="{ name: 'edit' }" class="mr-2">
            <fa icon="edit"></fa>
          </router-link>
          <fa icon="trash" class="mr-2 style trash"></fa>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import loaiphongService from "@/services/loaiphong.service";
export default {
  name: "DSLP",
  components: {},
  data() {
    const layDSLP = async () => {
      try {
        this.loaiphong = await loaiphongService.layDSLP();
      } catch (error) {
        console.log(error);
      }
    };
    return {
      loaiphong: layDSLP(),
    };
  },
  method: {
    async layDSLP() {
      try {
        this.loaiphong = await loaiphongService.layDSLP();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.style {
  padding: 1px;
  width: 16px;
  color: white;
  border-radius: 15px;
}
.info {
  background-color: rgb(93, 42, 245);
}
.trash {
  color: red;
}
</style>
