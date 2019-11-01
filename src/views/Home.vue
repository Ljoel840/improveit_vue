<template>
  <article>
     <carousel/> 
     <section>
		 	<div class="informacion container">
                  <h3><strong>Improve-It Sports Management </strong>es una agencia de representación y asesoramiento enfocada en potenciar a los mejores talentos y actores del deporte. Entregamos resultados, no promesas; utilizando estrategias sólidas e innovadoras que mantienen a nuestros clientes a la vanguardia del mercado.  </h3> 
                  <h3> En base a nuestra experiencia hemos elaborado un nuevo estilo de representación individualizado y de alto impacto. Las personas que trabajan para nuestra empresa han sido seleccionadas por su dedicación, creatividad y pasión por el deporte.
                  </h3>
			</div>
      </section>
      <servicios v-if="ultimo"/>
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
    ultimo: false
    }),
  created () {
    window.scrollTo(0,0);

    },

    mounted () {
        // El footer tiene un pequeño retraso para no pegar en pantalla
        setTimeout(() => {
            this.ultimo = true
        }, 2000);
    },
}
</script>
<style scoped>

	section {
		margin:0;
		width: 100%
	}

    .informacion{
      color: #fff;
      padding-top: 3em;
      
    }
    .informacion img {
      margin-bottom: 3em;
      margin-top: 3em;
    }
	 h3 {
      font-size: 1.4em;
      /* padding: .5em 3em; */
      text-align: justify;
	  font-family: MyriadPro_Regular;
	  line-height: 2em;
	  width: 100%;
	  /* max-width: 1200px; */
	  margin: 0;

    }
    strong {
      font-weight: bolder;
     
    }
    
    .logo {
      padding: 1em;
      text-align: center;
    }
    
     @media only screen and (max-width: 700px) {
        .informacion h3 {
          font-size: 1.3em;
          padding: 1em;
          text-align: justify;
        }
     

    }

 
</style>