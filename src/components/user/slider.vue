<template>
  <div>

    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(slide,index) in 10" :key="index">
        <div class="carousel__item">
          <p>{{index}}</p>
          <img :src="getImgUrl(index)" >  
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

    }
  },
  methods:{
    getImgUrl(pet) {
    
    var images = require.context('../assets/', false, /\.png$/);
    var src=images('./' + pet + ".png");
    return src;
  }

  }
})
</script>
