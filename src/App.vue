<template>
  
    <Header></Header> 
    <Todos></Todos>   
  

</template>

<script>
  import Header from './components/Header.vue';
  import Todos from './components/Todos.vue';
  export default{
    name: "App",
    components: {Header,Todos}
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