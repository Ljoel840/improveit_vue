<template>
    <section>
        <div class="container-fluid">
            <h1 v-if="!informacion"> NO HAY DATOS CARGADOS</h1>
			<div class="galeria" v-if="informacion">
				<div class="break" v-for="info in informacion" :key="info.id">
					<div class="articulo">
						<div class="contenido" >
						<router-link :to="{ name:'detalleDatos', params:{ infoSeleccionada:info}}">
							<img class="imagen" :src="info.imagen.url">
							<h3 class="title">{{info.titulo}}</h3>
						</router-link>
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
    name: 'cargarDatos',
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
        justify-content: center;
        
        
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
        /* height:350px; */
		width: 90%;
        max-height:600px;
        text-align: center;
        overflow-y: auto;
		position: relative;
	    display: inline-block;
    }

	img {
        width: 100%;
        /* margin-top: 10px;
        margin-bottom: 15px; */
        height: auto;
        text-align: center;
		border-radius: 10px;
		border: solid 2px #5069C3

    }

	.contenido:hover .title {
		display: inline
	}

	.contenido:hover img {
		opacity: .5;
		border: solid 2px #9A175B
	}

	.title{
		color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: none;
	}

	    @media (max-width: 767px) { 
        .galeria {
            columns:2;
        }
        .contenido {
            max-height:350px;
        }

    }
        


    @media (max-width: 480px) {
        .galeria {
            columns: 1;
        }
        .contenido {
            max-height:350px;
        }
    }



</style>
