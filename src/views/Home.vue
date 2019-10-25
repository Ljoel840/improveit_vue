<template>
  <article>

     <carousel/> 
     <section class="informacion container-fluid">
              <div class="row no-gutters" >
                <div class="col-md-8 col-sm-12 ">
                  <h3>Improve-It Sports Management es una agencia de representación y asesoramiento enfocada en potenciar a los mejores talentos y actores del deporte. Entregamos resultados, no promesas; utilizando estrategias sólidas e innovadoras que mantienen a nuestros clientes a la vanguardia del mercado.  </h3> 
                  <h3> En base a nuestra experiencia hemos elaborado un nuevo estilo de representación individualizado y de alto impacto. Las personas que trabajan para nuestra empresa han sido seleccionadas por su dedicación, creatividad y pasión por el deporte.
                  </h3>
                </div>
                <div class="col-md-4 logo col-sm-12" > <img src="@/assets/img/logomedio.png" alt="logo Improve it" style="width: 70%; height: auto p-0"> </div>
            </div>
      </section>
      <servicios/>
      <p_footer/>
  </article>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/carousel.vue'
import servicios from '@/components/servicios.vue'
import p_footer from '@/components/p_footer.vue'

export default {
  name: 'home',
  components: {
    carousel,
    servicios,
    p_footer,
  },
  data: () => ({
    }),
  created () {
    window.scrollTo(0,0);

    },
}
</script>
<style scoped>
    .informacion{
      color: #fff;
      padding-top: 3em;
      
    }
    .informacion img {
      margin-bottom: 3em;
    }

    .informacion h3 {
      font-size: 1.8em;
      padding: .5em 3em;
    }
    .logo {
      padding: 1em;
      text-align: center;
    }
    
     @media only screen and (max-width: 700px) {
        .informacion h3 {
          font-size: 1.2em;
          padding: 1em;
          text-align: center;
        }
     

    }

</style>