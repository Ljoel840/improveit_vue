<template>
  <section>
		<h2 class="mensajeVacio" v-if="!datos"> NO HAY DATOS CARGADOS</h2>
		<div class="container-fluid" v-if="datos">
			<h1 class="titulo">{{datos.titulo}}</h1>
			<div id="main" >
				<h2 v-if="datos.video.activo"><strong>Videos</strong></h2>
				<iframe  v-for="urlVideo in urlVideos" :key="urlVideo.id" class="videos"  :src="urlVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<h2 v-if="(datos.imagenAlternativa2.url)||(datos.imagenes)"><strong>Imágenes</strong></h2>
				<img id="show-modal" @click="showModal = true; urlImg=datos.imagenAlternativa2.url" :src="datos.imagenAlternativa2.url" v-if="datos.imagenAlternativa2" style="cursor:pointer">

				<span v-for="imag in datos.imagenes" :key="imag.id" style="padding:0">
					<img id="show-modal" @click="showModal=true; urlImg=imag" :src="imag" v-if="imag"  style="cursor:pointer">
				</span>

				<modal v-if="showModal" @close="showModal = false">
					<div slot="body">
						<img  style="width: auto; max-width: 100%; max-height: 80%" :src="urlImg">
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
	  urls: [],
	  urlVideos: [],
	  parrafos: [],
	  texto: null,
	  p:null,
	  prevRoute: null,
	  i:null,
	  f:null,
	  cadena:'',
	  urlyoutube:'',	

    };
  },
	// beforeRouteEnter(to, from, next) {
	// 	next(vm => {
	// 	vm.prevRoute = from
	// 	console.log(vm.prevRoute)
	// })
	// },
  created () {
	if (!this.datos) {
		this.$router.go (-1)
	}
	window.scrollTo(0,0);
	// console.log(this.datos);
	this.urls.push(this.datos.imagenAlternativa.url)
	this.urls.push(this.datos.imagenAlternativa2.url)
	this.texto=this.datos.video.url
	if (this.datos.video.url) {
		this.urlVideos.push(this.texto.replace('watch?v=', 'embed/'));
		if (this.datos.video.url !== this.datos.video.poster){
			this.texto=this.datos.video.poster
			this.urlVideos.push(this.texto.replace('watch?v=', 'embed/'))
		}
		}


	// this.parrafos = this.datos.parrafos 
	// console.log(this.datos.parrafos[0].texto)
	// for (this.p in this.datos.parrafos) {
	// 	this.texto = this.datos.parrafos[this.p].texto
	// 	if (this.texto.indexOf("https://www.youtube.com/")!==-1){
	// 		this.urlVideos.push(this.texto.replace('watch?v=', 'embed/'))
	// 	}
	// }
	this.cadena=this.datos.parrafos[0].texto
	console.log(this.cadena)
	do {
		this.i=this.cadena.indexOf("https://www.youtube.com/")
			if (this.i>=0) {
				this.f=this.cadena.indexOf("></oembed>")
				console.log('f: '+this.f+' i: '+this.i)
				this.urlyoutube = this.cadena.substr(this.i,this.f-this.i-1);
				console.log('urlyoutube: '+this.urlyoutube)
				this.urlVideos.push(this.urlyoutube.replace('watch?v=', 'embed/'))
				// this.cadena2=this.cadena.substr(this.f+10,this.cadena.length-this.f+10)
				this.cadena=this.cadena.substr(this.f+10,this.cadena.length-this.f+10)
				console.log('cadena: '+this.cadena)
				}
			console.log('Valor de i: '+this.i)
			console.log('longitud de cadena: '+this.cadena.length)
	} while (this.i>=0);
	console.log(this.urlVideos)

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
	  }
    
  }
}

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
#main iframe {
	max-width: 500px;
	min-height: 315px;
	width: 100%;
	height: auto;
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

