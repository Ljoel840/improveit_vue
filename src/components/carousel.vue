<template>
    <section>
        <div style="width:100%;height:50vw; margin-top: 50px">
            <!-- Using the slider component -->
            <slider ref="slider" :options="options">
                <!-- slideritem wrapped package with the components you need -->
                <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
                    <div>
                     <img :src="item.imagen" alt="img">
                     </div>
                </slideritem>
                <!-- Customizable loading -->
                <div slot="loading">loading...</div>
            </slider>
        </div>
 
    </section> 
</template>



<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
    name: 'carousel',
    data () {
    return {
        //data list [array]
            someList:[
          {
            imagen:  require('@/assets/img/fondo_improveit.jpg'),
            style: {
              'background': '#1bbc9b'
            }
          },
          {
            imagen: require('@/assets/img/fondo_improveit3.jpg'),
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            imagen: require('@/assets/img/fondo_improveit4.jpg'),
            style: {
              'background': '#7baabe'
            }
          },
{
            imagen: require('@/assets/img/fondo_improveit5.jpg'),
            style: {
              'background': '#7baabe'
            }
          },
          {
            imagen: require('@/assets/img/fondo_improveit6.jpg'),
            style: {
              'background': '#7baabe'
            }
          },
          {
            imagen: require('@/assets/img/fondo_improveit7.jpg'),
            style: {
              'background': '#7baabe'
            }
          },




        ],
        //Slider configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance: 500,
          thresholdTime: 100,
          autoplay:5000,
          loop:true,
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 1000,
          
        }
      }
    },
    components: {
      slider,
      slideritem
    }
 
    
}




</script>

<style scoped>
</style>
