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
										<h3>{{info.titulo}}</h3>
										<p>{{info.parrafos[0].texto}}</p>
									</div>
								</router-link>
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
        margin: 0px 0 20px 0;
        text-align: center;
        overflow: hidden;
        
    }
	   .galeria{
        column-count: 3;
        column-gap: 2em;

    }

    .break {
        break-inside: avoid;
        page-break-inside: avoid;

    }

    .contenido {
		max-width: 400px;
		width: 90%;
		height:auto;

        text-align: center;
		position: relative;
	    display: inline-block;
	}
	.contenido h2{
		color:#fff;
		text-transform: uppercase;
		font-size: 2vw;
		text-align:left;
	}

	img {
        width: 100%;
        height: auto;
        text-align: center;
		-webkit-filter: grayscale(100%);
   		 filter: grayscale(100%);
    }

	.contenido:hover .title {
		display: inline;
		text-align: right;
		padding-right: 10px;
	}

	.contenido:hover img {
		opacity: .9;
		-webkit-filter: grayscale(0%);
   		filter: grayscale(0%);
		
	}
	

	.title{
		color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 0%);
		display: none;
		background: linear-gradient(180deg, rgba(154,23,91,0) 0%, rgba(154,23,91,1) 100%);
		width: 100%;
		height: 50%;
		
	}

	.title h3{
		font-size: 1.8vw;
		padding-left: 30%;
	}
	.title p{
		font-size: 1.3vw;
		padding-left: 40%;
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
		.title h3{
			font-size: 3vw;
			padding-left: 30%;
		}
		.title p{
			font-size: 1.8vw;
			padding-left: 40%;
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
		font-size: 8vw;

		}
		.title {
		height: 80%;	
		}
		.contenido h2 {
			font-size: 6vw;
		}
		.title p{
			font-size: 4vw;
			padding-left: 40%;
		}

    }



</style>
