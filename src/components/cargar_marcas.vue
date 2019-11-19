<template>
    <section>
        <div class="container-fluid">
            <h1 v-if="!informacion"> NO HAY DATOS CARGADOS</h1>
			<div class="galeria" v-if="informacion">
				<div class="break" v-for="info in informacion" :key="info.id">
					<div class="articulo">
						<div class="contenido" >
							<div>
								<h2>{{info.boton.texto}}</h2>
							<router-link :to="{ name:'detalleDatos', params:{ infoSeleccionada:info}}">
								<img class="imagen" :src="info.imagen.url">
								<div class="title">
									<h3>Campaña:</h3>
									<h3>{{info.titulo}}</h3>
								</div>
							</router-link>
								<a :href="info.boton.accion" v-if="info.boton.accion" target="_blank">
									<img class="imagen2" :src="info.imagenAlternativa.url" style="width: 70%; margin-bottom: 40px; float: right">
								</a>
							</div>
						</div>

					</div>
				</div>
			</div>

        </div> 

       <router-view/>
    </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import axios from 'axios'

export default {
    name: 'cargarMarcas',
    data(){
        return{
		   informacion:[],
		  
		}
	
	},
	props:{
		pag:String
	},
     created () {
		// extraer (this.data)
		// console.log("pagina",this.pag)
        let datos = axios.post(`${process.env.VUE_APP_RUTA_API}dfs60024`,{
        proyectoEnc: 'improveit',
        pagina: this.pag
        })
        .then(response => {
            this.informacion = response.data.frontBlogs
            // console.log('informacion')
            // console.log(this.informacion)

        })
        .catch(error => {
            console.log(error);
            this.informacion = '';
        })

    },
   
}
</script>

<style scoped>

    h1 {
        color: #9A175B;
        text-align: center;
    }

    .articulo {
        width: 100%;
        background-color: #000;
        border-radius: 10px;
        margin: 0px 0 90px 0;
        justify-content: center;
		text-align: center;
        
        
    }
	   .galeria{
        column-count: 4;
        column-gap: 1em;

    }

    .break {
        break-inside: avoid;
        page-break-inside: avoid;

    }

    .contenido {
        /* height:350px; */
		width: 70%;
        /* max-height:600px; */
        text-align: center;
		/* overflow:hidden; */
		position: relative;
	    display: inline-block;
	}
	.contenido h2{
		color:#fff;
		text-transform: uppercase;
		font-size: 1.3vw
	}

	img {
        width: 100%;
        /* margin-top: 10px;
        margin-bottom: 15px; */
        height: auto;
        text-align: center;
		/* border-radius: 10px;
		border: solid 2px #5069C3 */
    }

	.contenido:hover .title {
		display: inline;
		text-align: right;
		padding-right: 10px;
		/* transition:all 2s ease .2s; */
	}

	.contenido:hover img {
		opacity: .9;
		/* border: solid 2px #9A175B; */
		
	}
	

	.title{
		color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 0%);
		display: none;
		background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
		/* border-radius: 10px; */
		width: 100%;
		height: 50%;
		
	}

	.title h3{
		font-size: 1.5vw;
	}




	    @media (max-width: 767px) { 
        .galeria {
            columns:2;
        }
        .contenido {
            max-height:350px;
		}
		.contenido h2 {
			font-size: 3vw;
		}

    }
        


    @media (max-width: 480px) {
        .galeria {
            columns: 1;
        }
        .contenido {
            max-height:350px;
		}
		
		.title h3{
		font-size: 6vw;

		}
		.title {
		height: 80%;	
		}
		.contenido h2 {
			font-size: 6vw;
		}

    }



</style>
