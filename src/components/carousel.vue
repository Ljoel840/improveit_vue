<template>
  <section>
	<div class="margen"></div>
    <img class="fondoDefecto" src="@/assets/img/f_contacto.jpg" v-if="!data">
    <b-carousel 
      id="carousel-1"
      v-model="slide"
      fade
      :interval="2000"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      v-if="data"
    >
      <b-carousel-slide v-for="foto in data" :key="foto.id">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="foto.imagen.url"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </section>
</template>



<script>
import { slider, slideritem } from "vue-concise-slider";
import axios from 'axios'

export default {
    name: "carousel",
    data() {
      return {
        slide: 0,
        sliding: null,
        data: [],
        error: null,
      };
    },
    components: {
      slider,
      slideritem
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true;
      },
      onSlideEnd(slide) {
        this.sliding = false;
      }
    },
    created () {
        // extraer (this.data)
        let datos = axios.post(`${process.env.API_CONTACT_URL}dfs60024`,{
        proyectoEnc: 'improveit',
        pagina: '/'
        },{
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			},
			crossDomain:true,
			withCredentials: true
		})
        .then(response => {
            this.data = response.data.frontBlogs
        })
        .catch(error => {
            console.log(error);
            this.data = '';
        })
          

    },

};
</script>

<style scoped>
section {
  margin-top: 50px;
}

.margen{
	height:50px
}

.fondoDefecto {
  width: 100%;
  height: auto;
}

@media screen  and (max-width: 500px)  {
.margen{
	height:120px
}
	
}

</style>
