<template>
	<article>
		
        <div class="container-fluid contacto" >
                <div class="row">

                <div class="col-lg-3 col-md-2 col-sm-1 col-12" ></div>
				<div class="col-lg-6 col-md-8 col-sm-10 col-12" style="text-align:center">
			        <h1><strong>CONTACTA CON NOSOTROS</strong></h1>
					<div class="formulario">
						<h4 style="text-align:center"><strong>ESCRIBE TU CONSULTA</strong></h4>
							<input type="text" name="name" id="nombre" class="form-control mb-0" placeholder="Nombre" autocomplete="off"> 
                        	<div style="height:30px"><P class="mensajeError" v-if="errorNombre.length">{{errorNombre}}</P></div>
                        	<input type="email" name="correo" id="correo" class="form-control mt-1 mb-0" placeholder="Correo" autocomplete="off"> 
                        	<div style="height:30px"><P class="mensajeError" v-if="errorCorreo.length">{{errorCorreo}}</P></div>
                        	<input type="tel" name="telefono" id="telefono" class="form-control mt-1 mb-0" placeholder="Teléfono" autocomplete="off">
                        	<div style="height:30px"><P class="mensajeError" v-if="errorTelefono.length">{{errorTelefono}}</P></div>
                        	<textarea name="mensaje" id="mensaje" class="form-control mt-1 mb-0" rows="4" placeholder="Mensaje"></textarea> 
                        	<div style="height:30px"><P class="mensajeError" v-if="errorMensaje.length">{{errorMensaje}}</P></div>
                        	<button id="boton" class="boton" @click="enviar()">Enviar</button>
					</div>
				</div>
                <div class="col-lg-3 col-md-2 col-sm-1 col-12 iconosDerecha" style=" margin-top: 10%; text-align:right">
					<div class="row">
						<div class="col-md-12">
						<a class="contenedorIconos" href="https://twitter.com/Improveit_sm" target="_blank"> <img src="@/assets/img/t_contacto.png" class="iconosRedes color1" alt="icono twitter"></a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
						<a class="contenedorIconos" href="https://web.facebook.com/improveitsm/?ref=page_internal" target="_blank"> <img src="@/assets/img/f_contacto.png" class="iconosRedes color2" alt="icono Facebook"></a>
						</div>
					</div>
					<div class="row">
						<div class="col-12">
						<a class="contenedorIconos" href="https://www.youtube.com/channel/UCv19StYUploQNnxwz2UYHjw" target="_blank"> <img src="@/assets/img/y_contacto.png" class="iconosRedes  color3" alt="icono youtube"></a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
						<a class="contenedorIconos" href="https://instagram.com/improveitsm?igshid=a4mtov6e0ty" target="_blank"><img src="@/assets/img/i_contacto.png" class="iconosRedes color4" alt="icono instagram" ></a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
						<a  class="contenedorIconos" href="https://www.linkedin.com/company/improve-it-sport-management/about/?viewAsMember=true" target="_blank"> <img src="@/assets/img/l_contacto.png" class="iconosRedes color5" alt="logo linkedin"></a>
						</div>
					</div>

				</div>

                <div class="iconosCel" style=" margin-top: 10%; text-align:center">
						<a class="contenedorIconos" href="https://twitter.com/Improveit_sm" target="_blank"> <img src="@/assets/img/t_contacto.png" class="iconosRedes color1" alt="icono twitter"></a>
						<a class="contenedorIconos" href="https://web.facebook.com/improveitsm/?ref=page_internal" target="_blank"> <img src="@/assets/img/f_contacto.png" class="iconosRedes color2" alt="icono Facebook"></a>
						<a class="contenedorIconos" href="https://www.youtube.com/channel/UCv19StYUploQNnxwz2UYHjw" target="_blank"> <img src="@/assets/img/y_contacto.png" class="iconosRedes  color3" alt="icono youtube"></a>
						<a class="contenedorIconos" href="https://instagram.com/improveitsm?igshid=a4mtov6e0ty" target="_blank"><img src="@/assets/img/i_contacto.png" class="iconosRedes color4" alt="icono instagram" ></a>
						<a  class="contenedorIconos" href="https://www.linkedin.com/company/improve-it-sport-management/about/?viewAsMember=true" target="_blank"> <img src="@/assets/img/l_contacto.png" class="iconosRedes color5" alt="logo linkedin"></a>
				</div>


            </div>



		</div>
			
		<p_footer/>
	</article>
</template> 
<script>
import p_footer from "@/components/p_footer.vue";
let emailjs = require("emailjs-com");

export default {
	name : 'contacto',
	components: {
    p_footer
  },
data(){
        return{
                nombre: '',
                correo: '',
                telefono: '',
                mensaje: '',
                errors: false,
                errorNombre: '',
                errorCorreo: '',
                errorTelefono: '',
                errorMensaje: ''
            
        }
    },
    created(){
		emailjs.init("uuser_drGWEBjo3zQJxmkBamkz");
		 window.scrollTo(0,0);
    },
    methods: {
        enviar(){
            let msg = {
                from_name: document.getElementById("nombre").value,
                mail: document.getElementById("correo").value,
                phone: document.getElementById("telefono").value,
                message_html: document.getElementById("mensaje").value,
            };
            this.errors = false;
            this.errorNombre = "";
            this.errorCorreo = "";
            this.errorTelefono = "";
            this.errorMensaje = "";
            
            if (!msg.from_name) {
                this.errors=true;
                this.errorNombre = "*El nombre es obligatorio.";
            }
            if (!msg.mail) {
                this.errors=true;
                this.errorCorreo = "*El Correo es obligatorio.";
            } else if (!this.validEmail(msg.mail)) {
                this.errors=true;
                this.errorCorreo = "El correo debe ser válido.";
            }

        
            if (msg.phone) {
                if (!this.validTelefono(msg.phone)) {
                    this.errors=true;
                    this.errorTelefono = "El Telefono debe ser válido.";
                }
            }

            if (!msg.message_html) {
                this.errors=true;
                this.errorMensaje = "*El Mensaje es obligatorio.";
            }



            if (!this.errors) {
                emailjs.send("default_service", "contacto", msg).then(
                function(Response) {
                    if (Response.text === "OK") {
                    }
                    console.log("SUCCESS. status=%d, text=%s",Response.status,Response.text)
                    alert("Gracias por Escribirnos, en breve te contactaremos");
                    document.getElementById("nombre").value="";
                    document.getElementById("correo").value="";
                    document.getElementById("telefono").value="";
                    document.getElementById("mensaje").value="";
                },
                function(err) {
                    alert("Ocurrio un problema al enviar  el correo");
                    console.log("FAILDED. error=", err);
                },
                );
                               
                
            }

            // e.preventDefault();
            },
            validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            },
            validTelefono: function (phone) {
            var re = /^([0-9]+){9}$/;
            return re.test(phone);
            }

        
    }


}
</script>
<style scoped>

	* {
		font-family: MyriadPro_Regular;

	}
	article {
		background-color: #000;
        margin-top: 120px
	}
	.contacto {
		margin-top: 10px;
		padding: 30px 20px;
		color: #fff;		
	}
	.contacto h1 {
		padding: 10px 0 0 0;
		font-size: 2em;
		color: #9A175B;
	}

	h4 {
		padding: 0 0 1em 0 
	}

	strong{
		font-weight: bolder;
	}


	#boton{
    width: 200px;
    border: none;
    color: white;
    background: transparent;
    background-color: #9A175B;
    padding: 20px 40px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
}

   #boton:hover{
    cursor:pointer;
    color: white;
    background-color: #5069C3;
   }



   .formulario * {
    line-height: 1.5em;
    text-align: justify;
    align-content: center;
}

.formulario {
	padding: 0 2em 2em 2em;
  
    
}

.formulario h4 {
    color: #68B5E3;
    text-align:left;
}

.mensajeError {
    font-size: 0.8em;
    color: red;
}




.iconosRedes {
	width: 80px;
	height: 13;	
    opacity: .8;
	

}

.iconosRedes:Hover {
	opacity: .5;	
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

	.iconosCel{
		margin-left: 0;
		margin-right: 0;
		margin: auto;
		text-align: center;
		display:none;
	}
@media (max-width: 767px) { 
    .formulario  {
		padding: 1em ;

	}
    .iconosRedes {
	width: 60px;
	
	}
	.iconosCel {
		display: block;
	}
	.iconosDerecha {
		display:none;
	}
}


</style>

