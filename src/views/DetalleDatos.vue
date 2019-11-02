<template>
  <section>
		<h2 class="mensajeVacio" v-if="!datos"> NO HAY DATOS CARGADOS</h2>
		<div class="container-fluid" v-if="datos">
			<h1 class="titulo">{{datos.titulo}}</h1>
			<div id="main" >
				<h2 v-if="datos.video.activo"><strong>Videos</strong></h2>
				<img class="videos" id="show-modal" @click="showModal = true, numero=2" :src="urlPoster1" @mouseover="cambiar" @mouseleave="volver" style="cursor:pointer" v-if="(datos.video.activo) && (datos.titulo==='#GanaConIndumex')">
				<img class="videos" id="show-modal" @click="showModal = true, numero=3" :src="urlPoster2" @mouseover="cambiar2" @mouseleave="volver2" style="cursor:pointer" v-if="(datos.video.poster) && (datos.titulo==='#GanaConIndumex')"> 
				<img class="videos" id="show-modal" @click="showModal = true, numero=2" :src="datos.video.poster" style="cursor:pointer" v-if="(datos.video.poster) && (datos.titulo!=='#GanaConIndumex')"> 


				<h2><strong>Imágenes</strong></h2>
				<img :src="datos.imagenAlternativa.url" v-if="datos.imagenAlternativa" @click="showModal = true, numero=0" style="cursor:pointer">
				<img :src="datos.imagenAlternativa2.url" v-if="datos.imagenAlternativa2" @click="showModal = true, numero=1" style="cursor:pointer">

				<modal v-if="showModal" @close="showModal = false">
					<div slot="body" style="text-align: center">
						<video v-if="numero>1" width="100%"  style="min-width: 100%" controls autoplay><source :src="urls[numero]" type="video/mp4"> Your browser does not support HTML5 video.</video>
						<img style="width: auto; max-width: 100%; max-height: 80%" :src="urls[numero]" v-if="numero<2">
					</div>
				</modal>
				
			</div>
		</div>
		<p_footer />
  </section>
</template> 
<script>
import p_footer from "@/components/p_footer.vue";
import modal from "@/components/modal.vue";

export default {
  name: "detalleDatos",
  components: {
	p_footer,
	modal
  },
  data() {
    return {
      datos: this.$route.params.infoSeleccionada,
	  ocultar: true,
	  urlPoster1: require('@/assets/img/poster_video.jpg'),
	  urlPoster2: require('@/assets/img/poster_video2.jpg'),
  	  showModal: false,
	  showModal2: false,
	  urls: []
    };
  },
  created () {
    window.scrollTo(0,0);
	this.urls.push(this.datos.imagenAlternativa.url)
	this.urls.push(this.datos.imagenAlternativa2.url)
	this.urls.push(this.datos.video.url)
	this.urls.push(this.datos.video.poster)
	console.log(this.urls)

    },
 
  methods: {
	  cambiar(){
		  this.urlPoster1= require('@/assets/img/poster_video1b.jpg')
	  },
	   volver(){
		  this.urlPoster1= require('@/assets/img/poster_video.jpg')
	  },
		cambiar2(){
		  this.urlPoster2= require('@/assets/img/poster_video2b.jpg')
	  },
	   volver2(){
		  this.urlPoster2= require('@/assets/img/poster_video2.jpg')
	  },
	  
    
  }
};

</script>

<style scoped>
section {
  margin-top: 130px;
  border-radius: 12px;
  margin-bottom: 10px;
  color: #fff;
	font-family: MyriadPro_Regular;
}


.titulo{
	padding: 30px;
	color: #999999
}


#main h2 {
	color: #fff;
	text-align: Left;
	padding: 30px 30px 0 30px;
}
/* ------------------- */
#main video {
	max-width: 500px;
	padding: 20px
}

#main img {
	max-width: 500px;
	padding: 20px;
	width: 100%
}

.mensajeVacio {
	padding: 30px;
	color: #9A175B;
	text-align:center;
}


@media screen and (max-height: 450px) {

 
}

@media screen  and (max-width: 600px) {

}
  
</style>

