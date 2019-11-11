<template>
  <article>
		<div class="container-fluid p-0">
				<div class="col-md-12 p-0 texto">
					<br>
					<h4><strong>MISIÓN</strong></h4>
					<P >Brindar a nuestros clientes soluciones integrales logrando la interacción perfecta entre negocios y deporte. Para ello definimos 3 metas fundamentales:</P>
					<ul >
						<li>Aportar valor a nuestros deportistas, cuidando su integridad y respetando su forma de ver el mundo.</li>
						<li>Generar utilidades excepcionales para nuestros clientes por intermedio de acciones innovadoras.</li>
						<li>Promover una industria deportiva confiable, creando un clima de negocios adecuado y transparente</li>
					</ul>
					<h4><strong>VALORES</strong></h4>
					<P >Somos responsables por nuestras acciones, que se rigen por los siguientes principios:</P>
					<ul >
						<li>Compromiso: sentir amor por el deporte, para hacer nuestro trabajo de una manera genuina y con alegría.</li>
						<li>Calidad: trabajar en búsqueda de la excelencia, dando a nuestros clientes lo que no se imaginaban que habían querido.</li>
						<li>Deportividad: comportarse con ética y respeto frente a la sociedad en su conjunto.</li>
						<li>Trabajo en equipo: todos juntos somos más que las suma de nuestros esfuerzos individuales.</li>
						<li>Comunidad: inspirar a la sociedad con nuestros principios y tomar de ella lo que nos acerque a nuestros ideales.</li>
						<li>Responsabilidad: rendir cuentas sobre nuestras acciones y asociarnos con marcas que compartan nuestra forma de ver el mundo.</li>
					</ul>
					<h4><strong>VISIÓN</strong></h4>
					<P >Nuestra visión es la guía que enmarca nuestra forma de ver el mundo y nos permite orientar esfuerzos hacia objetivos concretos:</P>
					<ul >
						<li>Ser una empresa inclusiva, con las mejores oportunidades de capacitación y crecimiento de la industria para quienes trabajan con nosotros.</li>
						<li>Convertirnos en un agente de cambio, acercando a deportistas y organizaciones tras el objetivo común de una industria deportiva próspera, dinámica y transparente.</li>
					</ul>
					<br>
				</div>
		</div>
		<p_footer/>
  </article>
</template> 
<script>
import p_footer from "@/components/p_footer.vue";

export default {
	name: 'nosotros',
	components: {
    p_footer
  },
  created () {
    window.scrollTo(0,0);

    },
}

</script>
<style scoped>
	article {
		color: #fff;
		margin-top: 120px;
		background-image: url("../assets/img/logogrande.png");
		background-size: cover;
		padding-bottom: 50px;
	}


	.texto{
		background-color: rgba(0, 0, 0, 0.8);
		
	} 

	* {
		text-align: justify;
		font-family: MyriadPro_Regular;

		
	}

	h4 {
		
		/* background-color: rgba(0, 0, 0, 0.8); */
		/* border-bottom: solid 10px  #68B5E3; */
		padding: 10px 0;
		padding-left: 20%;
		border-bottom: 3px solid;
  		border-image-source: linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 18%, rgba(80,105,195,1) 18%, rgba(0,0,0,0) 90%);
  		border-image-slice: 1;
		
	}
	p, ul  {
		padding: 0 20%;
		

	}
	p {
		margin-top: 3em;

	}
	ul {
		margin-bottom: 3em
	}
	
	ul li {
		list-style-position: inside;
	}

	img {
		width: 80%;
		text-align: center;
	}

@media (max-width: 767px) { 
        p, ul  {
		padding: 0 5%;

		}
		h4 {
		padding: 0 5%;
		border-image-source: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 3%, rgba(80,105,195,1) 3%, rgba(0,0,0,0) 90%);

        }
}

	
</style>
