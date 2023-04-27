<template>

<div class="col-12 py-3 my-2">
 

  <Carousel :autoplay="2500" :wrap-around="true" >
    <Slide v-for="(slide,index) in 2" :key="index">
      <div class="carousel__item"  >
        <img :src="imageSrc(images[index].url)" style="width:1000px;height:500px;object-fit : cover;" />
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


export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data(){
    return{
      images:[
        {url:"../../assets/img/background.jpg"},
        {url:"../../assets/img/background1.jpg"}
      ],
    }
  },
  methods:{
    imageSrc(url) {
      return new URL( url,import.meta.url);
    },
  },
 
});
</script>