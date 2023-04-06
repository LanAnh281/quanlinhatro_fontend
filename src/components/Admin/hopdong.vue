<template>
    <table class="table">
        <thead>
          Danh sách Hợp đồng
          <tr>
            <th scope="col">Tên phòng</th>
            <th scope="col">Diện tích</th>
            <th scope="col">Ngày bắt đầu</th>
            <th scope="col">Ngày kết thúc</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
            
                <tr v-for="hd in hopdong" :key="hd.mahd">
                  <td>{{ hd.mahd }}</td>
                  <td>{{ hd.mahd }}</td>
                  <td>{{ hd.ngaybd }}</td>
                  <td>{{ hd.ngaykt }}</td>

                  <td>
                    <!-- <fa :icon="['fab','trash']"></fa> -->
                    <router-link :to="{ name: 'edit' }" class="mr-2" >
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
import hopdongService from "@/services/hopdong.service";
export default{
    name:"hopdong",
    data() {
    const layDSHD = async () => {
      try {
        this.hopdong = await hopdongService.layDSHD();
        console.log(this.hopdong);
      } catch (error) {
        console.log(error);
      }
    };
    return {
      hopdong: layDSHD(),
    };
  },
}
</script>