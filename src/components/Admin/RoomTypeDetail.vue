<template>
    <Sidebar class="col-2 px-0"></Sidebar>
    <div class="col-10 px-2">
        <Header></Header>
        <h1 class="text-center my-3">Chi tiết loại phòng</h1>
        <div>
            <p><span>Tên loại:</span> {{ loaiphong.tenloai }} </p>
            <p><span>Diện tích:</span> {{ loaiphong.dientich }} m<sup>2</sup> </p>
            <p><span>Giá phòng:</span> {{ loaiphong.giaphong }} ngàn đồng</p>
        </div>
        <table class="table mt-2">
            <thead>
                <tr>
                    <th scope="col">Tên phòng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thao tác</th>

                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(p, index) in phong">
                    <td>{{ p.tenphong }}</td>
                    <td>{{ p.trangthai }}</td>
                    <td>
                        <!-- <fa :icon="['fab','trash']"></fa> -->

                        &nbsp;
                        <router-link :to="{
                            name: '',
                            params: { maloai: p.maloai }
                        }">
                            <fa icon="edit"></fa>
                        </router-link>
                        &nbsp;
                        <fa icon="trash" class="mr-2 style trash"></fa>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import phongService from '../../services/phong.service';
import loaiphongService from '../../services/loaiphong.service';
import Header from './Header.vue';
import Sidebar from './sidebar.vue';
export default {
    name: "phong",
    components: { Header, Sidebar },

    data() {
        return {
            phong: [],
            loaiphong:{type:Object}
        }
    },
    created() {
        let maloai = this.$route.params.maloai;
        if (maloai) {
            this.layDSP(maloai);
        }
    },
    methods: {
        async layDSP(maloai) {
           this.loaiphong=await loaiphongService.layLP(maloai);
            this.phong = await phongService.LayTTPTheoLoai(maloai);
            if (this.phong.length > 0) {
                this.phong.map((phong) => {
                    if (phong.trangthai == 1)
                        phong.trangthai = 'Đã thuê';
                    else phong.trangthai = "chưa thuê";
                })
            }
            else {
                this.$swal.fire({
                    title: "Loại phòng này chưa có phòng ",
                    confirmButtonText: "OK",
                }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$router.push({ name: "admin" });
          }
        });
            }
        }
    },
}
</script>