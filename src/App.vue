<template>
  <div class="container mt-3 row">
    <Sidebar class="col-2 px-0"></Sidebar>
    <div class="col-10 px-2">
      <Header></Header>
      <router-view/>
    </div>
    
   
  </div>
  
  

</template>

<script>
import Header from './components/Admin/Header.vue';
import Sidebar from './components/Admin/sidebar.vue';


  export default{
    name: "App",
    components:{Header,Sidebar},
  }
</script>
<style>
  #app{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: block !important;
    
  }
  body{
    display: block !important;
  }
</style>