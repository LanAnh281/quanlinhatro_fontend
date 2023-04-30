<template>

<div class="col-12 py-3 my-2">
  <h1 class=" mt-3" style="color: #6C7ee1;">Chào mừng bạn đến với {{ nhatro.tennhatro }}</h1>
  <h5 class="mb-5"> <i>Nơi biến ngôi nhà thành gia đình của bạn</i> </h5>
  <Carousel :autoplay="2000" :wrap-around="true" >
    <Slide v-for="(slide,index) in 3" :key="index">
      <div class="carousel__item"  >
        <img :src="imageSrc(images[index].url)" style="width:900px;height:400px;object-fit : cotain;" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</div>

</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import nhatroService from '../../services/nhatro.service';
export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data(){
    return{
      nhatro:{type:Array},

      images:[
        {url:"../../assets/img/background2.jpg"},
        {url:"../../assets/img/background1.jpg"},
        {url:"../../assets/img/background3.jpg"}
      ],
      
    }
  },
  created(){
        this.layNT();
    },
  methods:{
    imageSrc(url) {
      return new URL( url,import.meta.url);
    },
    async layNT(){
      this.nhatro=await nhatroService.layTTNT()
      this.nhatro=this.nhatro[0];
    }
  },
  
   
 
});
</script>