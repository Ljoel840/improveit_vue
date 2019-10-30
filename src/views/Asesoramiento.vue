<template>
    <article>
        
        <div class="container-fluid" style="padding: 0; margin-top: 130px">
            <div class="tope" >
                <h1>Asesoramiento a Clubes, Federaciones y Organizaciones Deportivas</h1>
            </div>
        </div>
        
        
        <div class="textoDescripcion">
            <h3>Brindamos soluciones simples y efectivas para optimizar recursos y generar mayores ingresos a cualquier tipo de negocio deportivo. Damos asesoramiento en todos los sectores de la empresa, pasando por capacitación del personal, campañas de comunicación y marketing, espacio físico de las instalaciones o actualización de materiales y sistemas de control.</h3>

        </div>

        
        <cargarDatos pag='/asesoramiento'></cargarDatos>

        <br>
        <p_footer/>


    </article>
</template>
<script>
import cargarDatos from '@/components/cargarDatos.vue';
import p_footer from '@/components/p_footer.vue';
import extraer from './extraer'


export default {
    name: 'asesoramiento',
    components: {
    p_footer,
    cargarDatos
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
        background-image: url("../assets/img/imagen4.jpg");
        background-position: right;
        background-color: #000;
    }

    .tope h1 {
        color: white; text-align: center; font-size: 4vh; padding: 10px 1em 

    }

    .textoDescripcion h3 {
        color: white;
        text-align: center;
        padding: 2em;
        font-size: 1.5em;
        
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