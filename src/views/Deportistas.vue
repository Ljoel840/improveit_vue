<template>
    <article>
        
        <div class="container-fluid" style="padding: 0; margin-top: 130px">
            <div class="tope" >
                <h1>Representación y asesoramiento de deportistas de alto rendimiento</h1>
            </div>
        </div>
        
        
        <div class="textoDescripcion">
            <h3>Trabajamos con nuestros atletas en la creación de marcas personales y generación de ingresos a través de asociaciones comerciales. Damos el soporte necesario para que, sin importar el nivel inicial de su carrera, todos nuestros deportistas puedan llegar al máximo de su potencial.</h3>

        </div>

        
        <cargarDeportistas></cargarDeportistas>

        <br>
        <p_footer/>


    </article>
</template>
<script>
import cargarDeportistas from '@/components/cargarDeportistas.vue';
import p_footer from '@/components/p_footer.vue';
import extraer from './extraer'


export default {
    name: 'deportistas',
    components: {
    p_footer,
    cargarDeportistas
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
        background-image: url("../assets/img/imagen1.jpg");
        background-position: left;
        background-color: #000;
    }

    .tope h1 {
        color: white; text-align: center; font-size: 4vh; padding: 10px 1em 

    }

    .textoDescripcion h3 {
        color: white;
        text-align: center;
        padding: 2em;
        font-size: 2em;
        
    }

    @media only screen and (max-width: 768px) {
        .textoDescripcion h3 {
            font-size: 1.3em;
        }
        .tope h1 {
            font-size: 3vh;
      
            

        }
        
	}

</style>