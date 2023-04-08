<template>
  <Sidebar class="col-2 px-0"></Sidebar>
    <div class="col-10 px-2">
      <Header></Header>
      <RoomType></RoomType>
    </div>
</template>

<script>
import RoomType from "../components/Admin/RomType.vue";
import Header from '../components/Admin/Header.vue';
import Sidebar from '../components/Admin/sidebar.vue';

export default {
  name: "DSLP",
  components: {Header,Sidebar,RoomType },
};
</script>

<style></style>
