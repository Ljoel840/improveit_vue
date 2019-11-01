<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="aria"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand" href="/">
        <img src="@/assets/img/logoarriba.png" alt="Logo Improve it" style="width:150px; height:auto" />
      </a>

      <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav ml-auto">
          <li class="nav-item" @click="colapsar()">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item" @click="colapsar()">
            <router-link class="nav-link" to="/deportistas" active-class="active">Atletas</router-link>
          </li>
          <li class="nav-item" @click="colapsar()">
            <router-link class="nav-link" to="/marcas" active-class="active" >Marcas</router-link>
          </li>
          <li class="nav-item" @click="colapsar()">
            <router-link class="nav-link" to="/eventos" active-class="active">Eventos</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/asesoramiento" active-class="active">Asesoramiento</router-link>
          </li> -->

          <li class="nav-item dropdown" @click="colapsar()">
              <a class="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Asesoramiento
              </a>
              
              <ul class="dropdown-menu dropdown-menu-right prueba" aria-labelledby="navbarDropdownMenuLink">
                <!-- <li><a class="dropdown-item" href="#">Asesoramiento a organizaciones deportivas</a></li> -->
                <!-- <li><a class="dropdown-item" href="#">Startups de emprendimientos deportivos</a></li> -->
                 <li @click="colapsar()">
                  <router-link class="dropdown-item" to="/asesoramiento" active-class="active">Asesoramiento a organizaciones deportivas</router-link>
                </li>
                <li @click="colapsar()">
                  <router-link class="dropdown-item" to="/startups" active-class="active">Startups de emprendimientos deportivos</router-link>
                </li>
                 
              </ul>
          </li>


          <li class="nav-item" @click="colapsar()">
            <router-link class="nav-link" to="/nosotros" active-class="active">Nosotros</router-link>
          </li>
          <li class="nav-item" @click="colapsar()">
            <router-link class="nav-link" to="/contacto" active-class="active">Contacto</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>
<script>
export default {
	data(){
		return{
			aria:true

		}
	},
	methods: {
		colapsar(){
			$('.navbar-collapse').collapse('hide');
		}
		
	},
}
</script>

<style>
    .navbar {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      align-items: right;
    }
    .nav-link {
      color: white;
	  text-align: center;
	  font-family: MyriadPro_Regular;


    }
    .router-link-active{
      font-weight: bold; 
      color: #fff;
        
    }



.navbar-nav li:hover > ul.dropdown-menu {
    display: block;
  background-color: rgba(0, 0, 0, 0.8) !important;
}
.dropdown-submenu {
    position:relative;
}
.dropdown-submenu>.dropdown-menu {
    top:0;
    left:100%;
    margin-top:-6px;

}

/* rotate caret on hover */
.dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
} 

.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {
   background-color: rgba(104,181,227,.8);
}
.nav > li > a:focus, .nav > li > a:hover {
   background-color:rgba(104,181,227,.8);
}


.dropdown-item {
  color: rgb(150, 150, 150) !important;
}

.active {
  color: white !important;

}

.nav-item::after {
	display: none
}

/* .dropdown-menu {
  width: 300px
} */


::-webkit-scrollbar{
    width: 12px;
    background-color: #F5F5F5;
}
::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
    /* border-radius: 10px; */
    background-color: rgb(121, 120, 120);
}
::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #191A1E;
    background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)
}


</style>
