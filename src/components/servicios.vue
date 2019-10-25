<template>
	<section class="servicios">
        <div class="container-fluid" style="padding:0">
            <div class="content-section">
                <div class="css-shapes-preview"></div>
                <div class="css-shapes-preview2"></div>
                <div class="serviciosImagenes">
                    <a href="#">
                        <img src="@/assets/img/imagen1.jpg" alt="Opcion Deportista" class="opciones">
                        <h1 class="textoImagenes">Representación y asesoramiento de deportistas de alto rendimiento</h1>
                    </a>
                </div>
                <div class="css-shapes-preview3"></div>
                <div class="css-shapes-preview4"></div>
            
                <div class="serviciosImagenes">
                    <a href="#">
                        <img src="@/assets/img/imagen2.jpg" alt="Opcion Marcas" class="opciones">
                        <h1 class="textoImagenes2">Campañas empresariales y activación de marcas</h1>
                    </a>
                </div>
                <div class="css-shapes-preview"></div>
                <div class="css-shapes-preview5"></div>
                <div class="serviciosImagenes">
                    <a href="#">
                        <img src="@/assets/img/imagen3.jpg" alt="Opcion Eventos" class="opciones">
                        <h1 class="textoImagenes">Gestión de eventos deportivos y actividades relacionadas al deporte</h1>
                    </a>
                </div>
                <div class="css-shapes-preview3"></div>
                <div class="css-shapes-preview6"></div>
                <div class="serviciosImagenes">
                    <a href="#">
                        <img src="@/assets/img/imagen4.jpg" alt="Opcion Ventas" class="opciones">
                        <h1 class="textoImagenes2">Asesoramiento a Clubes, Federaciones y Organizaciones Deportivas</h1>
                    </a>
                </div>
                <div class="css-shapes-preview"></div>
                <div class="css-shapes-preview2"></div>
                <div class="serviciosImagenes">
                    <a href="#">
                        <img src="@/assets/img/imagen5.jpg" alt="Opcion Deportista" class="opciones">
                        <h1 class="textoImagenes">Startups de Emprendimientos Deportivos</h1>
                    </a>
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
 .textoImagenes {
    position: absolute;
    margin-top: -30vw;
    color: #fff;
    font-size: 3vw;
    z-index: 8;     
    right: 5vw;
    padding-left: 50%;

  }
 
 .textoImagenes2 {
    position: absolute;
    margin-top: -30vw;
    color: #fff;
    font-size: 3vw;
    z-index: 8;     
    left: 5vw;
    padding-right: 50%;

  }
  img:hover {
      opacity: 0.5;
  }

</style>