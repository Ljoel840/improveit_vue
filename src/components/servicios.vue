<template>
	<section class="servicios">
        <div class="container-fluid" style="padding:0">
            <div class="content-section">
                <div class="css-shapes-preview"></div>
                <div class="css-shapes-preview2"></div>
                <div class="serviciosImagenes">
					<router-link  to="/deportistas" active-class="active">
                        <img src="@/assets/img/imagen1.jpg" alt="Opcion Deportista" class="opciones">
						<div class="textoImagenes">
							<h1 >Representación y Asesoramiento </h1>
							<h1 >de Deportistas de Alto Rendimiento</h1>
						</div>
					</router-link>
                </div>
                <div class="css-shapes-preview3"></div>
                <div class="css-shapes-preview4"></div>
            
                <div class="serviciosImagenes">
		            <router-link  to="/marcas" active-class="active">
                        <img src="@/assets/img/imagen2.jpg" alt="Opcion Marcas" class="opciones">
						<div class="textoImagenes2">
							<h1>Campañas Empresariales</h1>
							<h1>y Activación de Marcas</h1>
						</div>
					</router-link>
                </div>
                <div class="css-shapes-preview"></div>
                <div class="css-shapes-preview5"></div>
                <div class="serviciosImagenes">
		            <router-link  to="/eventos" active-class="active">
                        <img src="@/assets/img/imagen3.jpg" alt="Opcion Eventos" class="opciones">
						<div class="textoImagenes">
	                        <h1 >Gestión de Eventos Deportivos </h1>
	                        <h1 >y Actividades Relacionadas al Deporte</h1>

						</div>
					</router-link>
                </div>
                <div class="css-shapes-preview3"></div>
                <div class="css-shapes-preview6"></div>
                <div class="serviciosImagenes">
		            <router-link  to="/asesoramiento" active-class="active">
                        <img src="@/assets/img/imagen4.jpg" alt="Opcion Ventas" class="opciones">
						<div class="textoImagenes2">
							<h1>Asesoramiento a Clubes, Federaciones </h1>
							<h1>y Organizaciones Deportivas</h1>
						</div>
					</router-link>
                </div>
                <div class="css-shapes-preview"></div>
                <div class="css-shapes-preview2"></div>
                <div class="serviciosImagenes">
		            <router-link  to="/startups" active-class="active">
                        <img src="@/assets/img/imagen5.jpg" alt="Opcion Deportista" class="opciones">
						<div class="textoImagenes">
							<h1>Startups de Emprendimientos</h1>
							<h1>Deportivos</h1>
						</div>
					</router-link>
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
	name:'servicios'
}
</script>
<style scoped>

.content-section {
    width: 100%;
    height: auto;
  }
  .content-section h2 {
    text-align: center;
    margin: 0;
  }

.servicios {
	margin-top: 12em;
}
.serviciosImagenes {
      position: relative; 
}
.opciones {
    position: relative;
    margin: 0 2px;
    width: 100%;
    z-index: 5;
}


.css-shapes-preview{ 
    position: absolute; 
    height: 7vw; 
    width: 100%; 
    padding: 0px; 
    background-color: #191A1E; 
    margin-top: -4vw; 
    transform: rotate(357deg) skew(-3deg); 
    -webkit-transform: rotate(357deg) skew(-3deg); 
    z-index: 10;
}


.css-shapes-preview2{ 
    position: absolute; 
    height: 1vw; 
    width: 100%; 
    padding: 0px; 
    background-color: #9A175B; 
    margin-top: -4vw; 
    transform: rotate(357deg) skew(-3deg); 
    -webkit-transform: rotate(357deg) skew(-3deg); 
    z-index: 10;
}

.css-shapes-preview3{ 
    position: absolute; 
    height: 7vw; 
    width: 100%; 
    padding: 0px; 
    background-color: #191A1E; 
    margin-top: -4vw; 
    transform: rotate(3deg) skew(3deg); 
    -webkit-transform: rotate(3deg) skew(3deg); 
    z-index: 10;
}
.css-shapes-preview4{ 
    position: absolute; 
    height: 1vw; 
    width: 100%; 
    padding: 0px; 
    background-color: #5069C3; 
    margin-top: -4vw; 
    transform: rotate(3deg) skew(3deg); 
    -webkit-transform: rotate(3deg) skew(3deg); 
    z-index: 10;
}
.css-shapes-preview5{ 
    position: absolute; 
    height: 1vw; 
    width: 100%; 
    padding: 0px; 
    background-color: #C82990; 
    margin-top: -4vw; 
    transform: rotate(357deg) skew(-3deg); 
    -webkit-transform: rotate(357deg) skew(-3deg); 
    z-index: 10;
}
.css-shapes-preview6{ 
    position: absolute; 
    height: 1vw; 
    width: 100%; 
    padding: 0px; 
    background-color: #68B5E3; 
    margin-top: -4vw; 
    transform: rotate(3deg) skew(3deg); 
    -webkit-transform: rotate(3deg) skew(3deg); 
    z-index: 10;
}


h1 {
	font-size: 2vw;
	margin: 0;
}
 .textoImagenes {
    position: absolute;
    margin-top: -30vw;
    color: #fff;
    font-size: 2vw;
    z-index: 8;     
    right: 5vw;
    padding-left: 50%;
	text-transform: uppercase;
	text-align: right;
	/* max-width: 900px */
  }
 
 .textoImagenes2 {
    position: absolute;
    margin-top: -30vw;
    color: #fff;
    font-size: 2vw;
    z-index: 8;     
    left: 5vw;
    padding-right: 50%;
	text-transform: uppercase;
	text-align: left;

  }
  img:hover {
      opacity: 0.5;
  }
  

  @media (max-width: 900px) {
		.servicios {
			margin-top: 6em;
		}	
		.textoImagenes{
			padding-left: 30%;

		}
		.textoImagenes2{
			padding-right: 30%;

		}
		h1 {
			font-size: 2.5vw;
		}


  }

    @media (max-width: 400px) {
		.servicios {
			margin-top: 3em;
		}	

		.textoImagenes{
			padding-left: 20%;

		}
		.textoImagenes2{
			padding-right: 20%;

		}
		h1 {
			font-size: 4vw;
		}


  }

</style>