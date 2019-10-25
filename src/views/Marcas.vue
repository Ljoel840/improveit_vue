<template>
    <article>
        
        <div class="container-fluid" style="padding: 0; margin-top: 130px">
            <div class="tope" >
                <h1>Campañas empresariales y activación de marcas</h1>
            </div>
        </div>
        
        
        <div class="textoDescripcion">
            <h3>Identificamos la conexión perfecta entre marcas y deportistas, aprovechando ideas creativas y atributos únicos para contar historias. Trabajamos con las empresas para aprovechar al máximo sus inversiones en patrocinio y marketing deportivo</h3>

        </div>

        
        <cargarDatos pag='/puntajes'></cargarDatos>

        <br>
        <p_footer/>


    </article>
</template>
<script>
import cargarDatos from '@/components/cargarDatos.vue';
import p_footer from '@/components/p_footer.vue';
import extraer from './extraer'


export default {
    name: 'deportistas',
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
        background-image: url("../assets/img/imagen2.jpg");
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