<template>
	<footer>
        <div class="container-fluid " style="padding: 20px 10px; width: 100%">
			<div class="row no-gutters">
				<div class="col-lg-3 col-md-6 datosEmpresa">
					<img src="@/assets/img/logoabajo.png" class="logoAbajo" alt="Logo Improveit">
					<p>Seguinos por nuestras redes sociales</p>
					<span >
						<a href="https://twitter.com/Improveit_sm" target="_blank"> <img src="@/assets/img/t_deportista.png" class="iconosFooter" alt="icono twitter"></a>
						<a href="https://web.facebook.com/improveitsm/?ref=page_internal" target="_blank"> <img src="@/assets/img/f_deportista.png" class="iconosFooter" alt="icono Facebook"></a>
						<a href="https://www.youtube.com/channel/UCv19StYUploQNnxwz2UYHjw" target="_blank"> <img src="@/assets/img/y_white.png" class="iconosFooter" alt="icono youtube"></a>
						<a href="https://instagram.com/improveitsm?igshid=a4mtov6e0ty" target="_blank"><img src="@/assets/img/i_white.png" class="iconosFooter" ></a>
						<a href="https://www.linkedin.com/company/improve-it-sport-management/about/?viewAsMember=true" target="_blank"> <img src="@/assets/img/l_white.png" class="iconosFooter"></a>

					</span>
				</div>

				<div class="col-lg-3 col-md-6 columna" >
					<div class="row no-gutters">
						<div class="col-md-12" >
							<h4>PARTNERS</h4>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12" >
							<a href="https://www.delfasoft.com/" target="_blank"><img src="@/assets/img/logodelfasoft2.png" style=" padding-top: 30px; width: 80%" alt="logo Delfasoft" ></a> <br>
							<a href="https://www.delfasport.com/" target="_blank"><img src="@/assets/img/logo_white.png" style=" padding-top: 30px; width: 90%" alt="logo Delfasport" ></a>

						</div>

					</div>
				</div>


				<div class="col-lg-3 col-md-6 columna">
					<div class="row no-gutters">
						<div class="col-md-12">
							<h4>ADVISORS</h4>
						</div>
					</div>
					<div class="row width: 100% no-gutters">
						<div class="col-md-12" >
							<a href="https://www.linkedin.com/in/daniel-macri-larrañaga-00754723/" target="_blank"><img src="@/assets/img/logodoctordaniel.png" style=" padding-top: 30px; width: 100%" alt="Logo Daniel Macri" ></a>
							<a><img src="@/assets/img/logolionel.png" style=" padding-top: 30px; width: 75%" alt="logo Lionel de Mello"></a>
							<a href="http://fca.com.uy/" target="_blank"><img src="@/assets/img/logoFCA.png" style="padding-top: 20px; width: 60%" alt="logo FCA" ></a>
							<a href="https://www.mevuelo.com/" target="_blank"><img src="@/assets/img/l_mevuelo.png" style="padding-top: 20px; width: 60%" alt="logo Mevuelo"></a>

						</div>
						
					</div>
							

				</div>  

				<div class="col-lg-3 col-md-6 columna">
					<div class="row no-gutters">
						<div class="col-sm-12">
							<h4>FOTOGRAFÍA</h4>
						</div>
					</div>
					<div class="row">
													
						<div class="col-md-12">
							<a href="https://www.instagram.com/ma_fotografiadeportiva/" target="_blank"><img src="@/assets/img/mathias.png" alt="Mathias Acosta" style="padding-top: 20px; width: 80%"></a>
							<a href="https://www.instagram.com/nachosuarezph_/" target="_blank"><img src="@/assets/img/nacho.png" alt="NAcho Suarez" style="padding-top: 20px; width: 80%"></a>
						</div>
						
					</div>
							

				</div>  

			</div> <!-- primer row -->
                
        </div>
    </footer>
</template>
<script>
export default {
	name:'p_footer'
}
</script>

<style scoped>
	footer {
		background-color: #191A1E;
		color: white;
        text-align: center;
		position: absolute ;
	}

	h4 {
		font-size: 1.2em;
	}

	


	.footerlogos {
        color: white;
        text-align: center;

	}
	
	.logoAbajo {
		width: 70%; 
		padding: 0; 
		margin-bottom: 20px

	}

	.iconosFooter {
		padding: 2px;
		width: 50px;
	}
	
   .iconosFooter:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }



  .iconosinformacion:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
		transform: translate3d(2px, 0, 0);
    }
  
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%, 60% {
		transform: translate3d(4px, 0, 0);
    }
  }

	.columna {
		padding: 5em 6.5vw; width: 100%; 
	}

	.datosEmpresa{
		padding: 0 3em

	}
		
	@media only screen and (max-width: 990px) {
		.columna {
		padding: 2em 12vw; width: 100%; }
	}

	@media only screen and (max-width: 768px) {
		.columna {
		padding: 2em 25vw; width: 100%; }

		.datosEmpresa{
		padding: 0 1em

	}
		
	}


</style>