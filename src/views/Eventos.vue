<template>
    <article>
        
        <div class="container-fluid" style="padding: 0; margin-top: 130px">
            <div class="tope" >
                <h1><strong>Gestión de Eventos Deportivos y Actividades Relacionadas al Deporte</strong></h1>
            </div>
        </div>
        
        
        <div class="textoDescripcion container">
            <h3>Contamos con vasta experiencia en organización de eventos deportivos de primer nivel, así como de actividades asociadas, como ser cursos, talleres o seminarios. Desde producciones nacionales hasta internacionales, entendemos los requisitos y las necesidades de cada deporte y conocemos las reglamentaciones y condiciones de cada parte involucrada.</h3>

        </div>

        
        <cargar_datos pag='/eventos'></cargar_datos>

        <br>
        <p_footer/>


    </article>
</template>
<script>
import cargar_datos from '@/components/cargar_datos.vue';
import p_footer from '@/components/p_footer.vue';
import extraer from './extraer'


export default {
    name: 'eventos',
    components: {
    p_footer,
    cargar_datos
    },
    data: () => ({
        campos: [],
        error: null,
	}),
	 created () {
    window.scrollTo(0,0);

    },

}
</script>
<style scoped>
    article {
        background-color: #000;
    }
	strong {
		font-weight: bolder;
	}


    .tope{
        background-size: auto 200px;
        background-repeat: no-repeat;
        height: 200px;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 8px solid #9A175B;
        border-bottom: 8px solid #9A175B;

    }

    .tope {
        background-image: url("../assets/img/imagen3.jpg");
        background-position: left;
        background-color: #000;
    }

    .tope h1 {
        color: white; text-align: center; font-size: 3vh; padding: 10px 1em;text-transform: uppercase; 

    }

    .textoDescripcion h3 {
        color: white;
        text-align: justify;
        padding: 2em;
        font-size: 1.3em;
		max-width: 1200px;
		line-height: 2em;
		font-family: MyriadPro_Regular;

        
    }

    @media only screen and (max-width: 768px) {
        .textoDescripcion h3 {
            font-size: 1.2em;
        }
        .tope h1 {
            font-size: 3vh;

        }
		.textoDescripcion h3 {
			padding: 1em 0;

		}

	}


</style>