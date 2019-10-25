<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand" href="/">
        <img src="@/assets/img/logoarriba.png" alt="Logo Improve it" style="width:150px; height:auto" />
      </a>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/deportistas" active-class="active">Atletas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/marcas" active-class="active">Marcas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/eventos" active-class="active">Eventos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/asesoramiento" active-class="active">Asesoramiento</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/startups" active-class="active">Startups</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nosotros" active-class="active">Nosotros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto" active-class="active">Contacto</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
    .navbar {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      align-items: right;
    }
    .nav-link {
      color: white;
      text-align: center;

    }
    .router-link-active{
      font-weight: bold; 
      color: #fff;
        
    }
    

</style>
