<template>
  <article>
    <h2 v-if="!datos"> NO HAY DATOS CARGADOS</h2>
    <div class="container-fluid" v-if="datos">
      
      <div id="mySidebar" class="sidebar" :style="ancho">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
        <img class="profile" :src="datos.imagen.url" alt="Profile" />
		
          <h4 style="margin: 10px 5px 0 0">{{datos.titulo}}</h4>
          <!-- <p class="text-center">{{datos.boton.texto}}</p> -->
			<div v-for="parraf in datos.parrafos" :key="parraf.id">
				<p >{{parraf.texto}}</p>
			</div>

        <a class="botonInformacion" :href="datos.boton.accion" v-if="datos.boton.tipo===2" target="_blank">Página Oficial</a>

      </div>

      <div id="main" :style="margen">
        <button class="openbtn" @click="openNav()" v-show="!ocultar">☰ Información</button>
        <button class="openbtncel" @click="openNav()" v-show="!ocultar">...</button>

			<img :src="datos.imagenAlternativa.url" v-if="datos.imagenAlternativa">
			<img :src="datos.imagenAlternativa2.url" v-if="datos.imagenAlternativa2">
			<video v-if="datos.video.activo" width="100%" controls><source :src="datos.video.url" type="video/mp4">
      Your browser does not support HTML5 video.</video>
      <video v-if="datos.video.poster" width="100%" controls><source :src="datos.video.poster" type="video/mp4">
      Your browser does not support HTML5 video.</video>
			

      </div>
    </div>
    <p_footer />
  </article>
</template> 
<script>
import p_footer from "@/components/p_footer.vue";

export default {
  name: "detalleDatos",
  components: {
    p_footer
  },
  data() {
    return {
      datos: this.$route.params.infoSeleccionada,
      ocultar: true,
      ancho: {
        width: "300px",
        color: "#fff"
      },
      margen: {
        margin: "300px"
      }
    };
  },
  created () {
    window.scrollTo(0,0);

    },
 
  methods: {
    openNav() {
      console.log(this.ancho);
      this.ancho.width = "300px";
      this.margen.margin = "0 0 0 300px";
      this.ocultar = true;
    },

    closeNav() {
      this.ancho.width = "0";
      this.margen.margin = "0";
      this.ocultar = false;
    }
  }
};
</script>

<style scoped>
article {
  margin-top: 130px;
  border-radius: 12px;
  margin-bottom: 10px;
  color: #fff;
}


  h2 {
        color: #9A175B;
        text-align: center;
    }
/* ------------------- */

.sidebar {
  height: auto;
  width: 0;
  position: absolute;
  z-index: 1;
  top: 150px;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: center;
  padding-bottom: 60px;
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
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 15px;
  border: none;
  position: fixed;
}


.openbtncel {
  font-size: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 15px;
  border: none;
  position: fixed;
}



.profile {
  width: 80%;
  height: auto;
}

.openbtn:hover {
  background-color: rgba(53, 47, 47, 0.6);
}

.openbtncel {
  display: none;
}


#main {
  transition: margin-left 0.5s;
  padding: 16px;
  text-align: left;
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
  .tituloNombre {
    display: none;
  }
  .openbtn{
    display:none;
  }
  .openbtncel {
    display: inline;
  }

}
  
img {
  padding: 10px 0
}

.tituloNombre {
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border-style: solid;
  border-color: #c82990;
  text-align: right;
  padding: 5px;
  position: fixed;
  right: 10px;
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
</style>

