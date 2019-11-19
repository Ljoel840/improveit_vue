<template>
	<footer>
        <div class="container-fluid " style="padding: 20px 10px; width: 100%">
			<div class="row no-gutters">
				<div class="col-lg-3 col-md-6 datosEmpresa">
					<img src="@/assets/img/logoabajo.png" class="logoAbajo" alt="Logo Improveit">
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
							<a href="https://www.mevuelo.com/" target="_blank"><img src="@/assets/img/l_mevuelo.png" style="padding-top: 20px; width: 90%" alt="logo Mevuelo"></a>

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
				<div class="row pie">
					<div class="col-md-12">

					<span >
					<p class="seguinos">Seguinos en</p>
						<a href="https://twitter.com/Improveit_sm" target="_blank"> <img src="@/assets/img/t_contacto.png" class="iconosFooter color1" alt="icono twitter"></a>
						<a href="https://web.facebook.com/improveitsm/?ref=page_internal" target="_blank"> <img src="@/assets/img/f_contacto.png" class="iconosFooter color2" alt="icono Facebook"></a>
						<a href="https://www.youtube.com/channel/UCv19StYUploQNnxwz2UYHjw" target="_blank"> <img src="@/assets/img/y_contacto.png" class="iconosFooter color3" alt="icono youtube"></a>
						<a href="https://instagram.com/improveitsm?igshid=a4mtov6e0ty" target="_blank"><img src="@/assets/img/i_contacto.png" class="iconosFooter color4" ></a>
						<a href="https://www.linkedin.com/company/improve-it-sport-management/about/?viewAsMember=true" target="_blank"> <img src="@/assets/img/l_contacto.png" class="iconosFooter color5"></a>

					</span>
					</div>
				</div>
        </div>
                <p class="copyright text-Left">Delfasoft &#169; 2019 versión 3.3.1 </p>
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
		width: 90%; 
		padding: 0; 
		margin-bottom: 20px;
		max-width: 350px

	}
	.pie {
		text-align: right;
	}
	.iconosFooter {
		padding: 2px;
		width: 50px;
		justify-content: right;
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
	.seguinos {
		display: inline;
		padding-right: 20px 
			}

	.columna {
		padding: 3em 6.5vw; width: 100%; 
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
	.color1{
	background-color: rgba(154,23,91,.8);
	}
	.color2{
		background-color: rgba(80,105,195,.8);
	}
	.color3{
		background-color: rgba(104,181,227,.8);
	}
	.color4{
		background-color: rgba(200,41,144,.8);
	}	
	.color5{
		background-color: rgba(247,247,247,.8);
	}

	.copyright {
		font-family: sans-serif;
		font-size: .8em;
		color: rgb(95, 95, 95)
	}

</style>