<template>
  <section>
    <h2 v-if="!atleta"> NO HAY DATOS CARGADOS</h2>
    <div class="container-fluid" v-if="atleta">
      
      <div id="mySidebar" class="sidebar" :style="ancho">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
        <img class="profile" :src="atleta.imagen.url" alt="Profile" />
          <h4 style="margin: 0 5px 0 0"><strong>{{atleta.titulo}}</strong></h4>
          <p class="text-center">{{atleta.boton.texto}}</p>
		  	<div v-for="parraf in atleta.parrafos" :key="parraf.id" contenteditable="true" >
				<p v-html="parraf.texto"></p>
			</div>
        <a class="botonInformacion" :href="atleta.boton.accion" v-if="atleta.boton.tipo===2" target="_blank">Más Información</a>
      </div>

      <div id="main" :style="margen">
        <button class="openbtn" @click="openNav()" v-show="!ocultar">☰ Información Atleta</button>
        <button class="openbtncel" @click="openNavCel()" v-show="!ocultar">...</button>

        <div class="tituloNombre" :style="margen">
          <h1>{{atleta.titulo}}</h1>
          <!-- <h3>{{atleta.boton.texto}}</h3> -->
        </div>
			<div class="contenedorFoto">
				<img :src="atleta.imagenAlternativa.url" v-if="atleta.imagenAlternativa">
			</div>
			<div class="contenedorResto container-fluid">
				<img id="show-modal" @click="showModal2 = true" :src="atleta.imagenAlternativa.url" v-if="atleta.imagenAlternativa">
				<img id="show-modal" @click="showModal = true" :src="atleta.imagenAlternativa2.url" v-if="atleta.imagenAlternativa2">
				<video v-if="atleta.video.activo" width="100%" controls><source :src="atleta.video.url" type="video/mp4">Your browser does not support HTML5 video.</video>
			</div>

      </div>

			<!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
			<modal v-if="showModal" @close="showModal = false">
				<div slot="body">
					<img  style="width: auto; max-width: 100%; max-height: 80%" :src="atleta.imagenAlternativa2.url" v-if="atleta.imagenAlternativa2">
				</div>
			</modal>
			<modal v-if="showModal2" @close="showModal2 = false">
				<div slot="body">
					<img style="width: auto; max-width: 100%; max-height: 80%" :src="atleta.imagenAlternativa.url" v-if="atleta.imagenAlternativa">
				</div>
			</modal>


    </div>

    <p_footer />
  </section>
</template> 
<script>
import p_footer from "@/components/p_footer.vue";
import modal from "@/components/modal.vue";

export default {
  name: "detalleDeportista",
  components: {
	p_footer,
	modal
  },
  data() {
    return {
      atleta: this.$route.params.atletaSeleccionado,
	  ocultar: false,
	  parrafos: [],
	  HTMLcontent: null,
      ancho: {
        width: "0",
        color: "#fff"
      },
      margen: {
        margin: "0"
	  },
	  showModal: false,
	  showModal2: false,
    };
  },
  created () {
	window.scrollTo(0,0);
	if (!this.atleta) {
		this.$router.go (-1)
	}
	console.log(this.atleta)
	},
	
	

  methods: {
    openNav() {
      this.ancho.width = "300px";
      this.margen.margin = "0 300px 0 0";
      this.ocultar = true;
    },

    closeNav() {
      this.ancho.width = "0";
      this.margen.margin = "0";
      this.ocultar = false;
	},
	
	openNavCel() {
      this.ancho.width = "100%";
      this.margen.margin = "0 0 0 0";
      this.ocultar = true;
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


  h1 {
        color: #fff;
        text-align: center;
		font-size: 7vw;
		margin: auto;
		font-family: myriad-pro;
    }
/* ------------------- */

.sidebar {
  height: 80%;
  width: 0;
  position:fixed ;
  z-index: 2;
  top: 150px;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  padding-bottom: 20px;
  text-align: center;
}

.sidebar a {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
  margin: auto;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar p {
  text-align: justify;
  padding: 10px;
}


.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn  {
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(154,23,91, 0.9);
  color: white;
  padding: 15px 20px;
  border: none;
  position: fixed;
  right: 10px;
  border-radius: 30px 0 0 30px;
  z-index: 3;
}


.openbtncel {
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(154,23,91, 0.9);
  color: white;
  padding: 15px 20px;
  border: none;
  position: fixed;
  right: 10px;
  z-index: 3;
}

.mensajeVacio {
	padding: 30px;
	color: #9A175B;
	text-align:center;
}

.profile {
  width: 80%;
  height: auto;
}

.openbtn:hover {
  background-color: rgba(80,105,195, 0.9);
}

.openbtncel {
  display: none;
}


#main {
  transition: margin-right 0.5s;
  padding: 16px;
  text-align: center;
}

#main img {
  width: 100%;
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 1em;
  }
 
}

@media screen  and (max-width: 600px) {
  /* .tituloNombre {
    display: none;
  } */
  .openbtn{
    display:none;
  }
  .openbtncel {
    display: inline;
  }

}
  

.tituloNombre {
  	color: #fff;
 	text-align: center;
  	padding: 20vw 5px 20px;
	right: 0;
	left: 0;
	margin: auto;
	position: absolute;
  	text-transform: uppercase;
  	font-size: 20vw;
	z-index: 1;
	text-shadow: 2px 2px 4px #000000;
}

.botonInformacion {

    width: 200px;
    border: none;
    color: white;
    background: transparent;
    background-color: #5069C3;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    /* text-transform: uppercase; */
    font-family: sans-serif;
    font-size: 1em;
    text-align: center;
}

.botonInformacion:hover{
    cursor:pointer;
    color: white;
    background-color: #9A175B;
    /* cursor: default; */

}



::-webkit-scrollbar{
    width: 12px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar-track{
    background-color: rgb(121, 120, 120);
}
::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #191A1E;
    background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)
}

.contenedorFoto {
	width: 100%;
	height: 35vw;
	overflow: hidden;
	-webkit-filter: grayscale(100%);
   		 filter: grayscale(100%);
}

.contenedorResto * {
	padding: 10px;
	max-width: 300px;
	height: auto;
	cursor: pointer;
}
</style>

