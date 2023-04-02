<template>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Tên phòng</th>
            <th scope="col">Diện tích</th>
            <th scope="col">Giá phòng</th>
          </tr>
        </thead>
        <tbody>
        
          <tr v-for="(lp,index) in loaiphong">
            <td>{{ lp.tenloai }}</td>
            <td>{{ lp.dientich}}</td>
            <td>{{ lp.giaphong}}</td>
          </tr>
          
        </tbody>
      </table>
</template>

<script>
export default{
    props: {
        loaiphong:{type: Array, default:[]},
        acticeIndex:{type: Number, default: -1},
    },
    emits:["update: activeIndex"],
    method:{
        
    }
}
</script>

<style>

</style>