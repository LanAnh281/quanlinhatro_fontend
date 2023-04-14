<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Loại phòng'"></Header>
    <h3 class="text-center mt-3 mb-3">Danh sách loại phòng</h3>
    <router-link :to="{ name: 'loaiphong.them' }" >
      <button class="btn btn-primary">+</button>
    </router-link>
    <table class="table table-hover mt-2">
      <thead>
        <tr>
          <th scope="col">Tên phòng</th>
          <th scope="col">Diện tích (m<sup>2</sup>)</th>
          <th scope="col">Giá phòng (ngàn đồng)</th>
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
            <router-link
              :to="{
                name: 'loaiphong.chitiet',
                params: { maloai: lp.maloai },
              }"
            >
              <fa icon="info" class="style info"></fa>
            </router-link>
            &nbsp;
            <router-link
              :to="{
                name: 'loaiphong.chinhsua',
                params: { maloai: lp.maloai },
              }"
            >
              <fa icon="edit"></fa>
            </router-link>
            &nbsp;
            <!-- <router-link :to="{ name: '' }"> -->
            <fa
              icon="trash"
              class="mr-2 style trash"
              v-on:click="onDelete(lp.maloai)"
            ></fa>
            <!-- </router-link> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import loaiphongService from "../../services/loaiphong.service";
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";
export default {
  name: "DSLP",
  components: { Header, Sidebar },
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
