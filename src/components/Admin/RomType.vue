<template>
  <router-link :to="{ name: 'loaiphong.them' }">
    <button class="btn btn-primary">+</button>
  </router-link>

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
      <tr :key="index" v-for="(lp, index) in roomtype">
        <td>{{ lp.tenloai }}</td>
        <td>{{ lp.dientich }}</td>
        <td>{{ lp.giaphong }}</td>
        <td>
          <!-- <fa :icon="['fab','trash']"></fa> -->
          <router-link :to="{ name: 'hopdong' }" :LPProps="lp.id">
            <fa icon="info" class="style info"></fa>
          </router-link>
          &nbsp;
          <router-link
            :to="{ name: 'loaiphong.chinhsua', params: { maloai: lp.maloai } }"
          >
            <fa icon="edit"></fa>
          </router-link>
          &nbsp;
          <!-- <router-link :to="{ name: '' }"> -->
          <fa
            icon="trash"
            class="mr-2 style trash"
            @click="onDelete(lp.maloai)"
          ></fa>
          <!-- </router-link> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import loaiphongService from "../../services/loaiphong.service";
export default {
  name: "DSLP",
  components: {},
  data() {
    return {
      roomtype: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      this.roomtype = await loaiphongService.layDSLP();
    },
    onDelete(roomtypeID) {
      this.$swal
        .fire({
          title: "Bạn có muốn xóa ?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "OK",
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            loaiphongService.xoaLP(roomtypeID);
            this.$swal.fire("Đã xóa!", "", "success");
            this.getAll();
          }
        });
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
