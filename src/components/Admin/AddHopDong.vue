<template>
  <Sidebar class="col-2 px-0"></Sidebar>
  <div class="col-10 px-2">
    <Header :silderProps="'Thêm hợp đồng'"></Header>

    <h3 class="text-center my-5">Thêm hợp đồng</h3>
    <form>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="hoten" class="col-form-label" style="width: 120px"
            >Họ tên</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="hoten" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenloai" class="col-form-label" style="width: 120px"
            >Tên loại</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <select id="tenloai" class="form-control">
            <option></option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="tenphong" class="col-form-label" style="width: 120px"
            >Phòng</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <select id="tenphong" class="form-control">
            <option></option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="ngaybd" class="col-form-label" style="width: 120px"
            >Ngày bắt đầu</label
          >
          <span>:</span>
        </div>

        <div class="col-sm-10">
          <input type="date" class="form-control" id="ngaybd" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2 pr-0">
          <label for="ngaykt" class="col-form-label" style="width: 120px"
            >Ngày kết thúc</label
          >
          <span>:</span>
        </div>
        <div class="col-sm-10">
          <input type="date" class="form-control" id="ngaykt" />
        </div>
      </div>
      <div class="my-2">
        <label for="tenloai" class="col-sm-2 col-form-label"></label>
        <button class="btn btn-primary col-1" style="height: 40px">Thêm</button>
      </div>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sidebar from "./sidebar.vue";

// import hopdongService from "@/services/hopdong.services";

export default {
  name: "ThemHopDong",
  components: { Header, Sidebar },

  data() {
    return {};
  },
};
</script>
