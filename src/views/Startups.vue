<template>
    <article>
        
        <div class="container-fluid" style="padding: 0; margin-top: 100px">
            <div class="tope" >
                <h1>Startups de emprendimientos deportivos</h1>
            </div>
        </div>
        
        
        <div class="textoDescripcion">
            <h3>Damos todo el soporte necesario para que no se cometan errores a la hora de iniciar un emprendimiento deportivo. Participamos de la proyección del negocio, estudios de mercado e identificación de la locación. Colaboramos con la contratación y capacitación de personal, compra de materiales e identificación de los mejores proveedores. Realizamos la campaña de lanzamiento y acompañamos al emprendimiento hasta que sea necesario, analizando desviaciones y generando manuales de procedimientos</h3>

        </div>

        
        <cargarDatos pag='/startups'></cargarDatos>

        <br>
        <p_footer/>


    </article>
</template>
<script>
import cargarDatos from '@/components/cargarDatos.vue';
import p_footer from '@/components/p_footer.vue';


export default {
    name: 'startups',
    components: {
    p_footer,
    cargarDatos
    },
    data: () => ({
        campos: [],
        error: null,
    }),
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
        background-image: url("../assets/img/imagen5.jpg");
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