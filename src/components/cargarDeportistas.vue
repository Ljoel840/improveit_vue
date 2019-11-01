<template>
    <section>
        <div class="container-fluid">
                <h1 v-if="!deportistas"> NO HAY ATLETAS CARGADOS</h1>
                <div class="row mt-30" style="color:black" v-if="deportistas">
                    <div class="col-md-3 col-sm-6" v-for="(atleta, index) in deportistas" :key="atleta.id" style="padding:20px">
                        <router-link :to="{ name:'detalleDeportista', params:{ atletaSeleccionado:atleta}}">
							<div :class="[{box16:(index % 2 == 0)}, {box15:!(index % 2 == 0)}]">
								<img :src="atleta.imagen.url">
								<div class="box-content">
									<h3 class="title">{{atleta.titulo}}</h3>
									<span class="post">{{atleta.boton.texto}}</span>
									<ul class="social">
									</ul>
								</div>
							</div>
						</router-link>
                    </div>
                </div>
        </div> 
       <router-view/>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'cargarDeportistas',
    data(){
        return{
		   deportistas:[],
		   par:true
        }
    },
     created () {
        let datos = axios.post(`${process.env.VUE_APP_RUTA_API}dfs60024`,{
        proyectoEnc: 'improveit',
        pagina: '/personas'
        })
        .then(response => {
            this.deportistas = response.data.frontBlogs
            // console.log('deportistas')
            // console.log(this.deportistas)

        })
        .catch(error => {
            console.log(error);
            this.data = '';
        })

    
       

    },
   
}
</script>

<style scoped>

    h1 {
        color: #9A175B;
        text-align: center;
    }
	img{
		-webkit-filter: grayscale(100%);
   		 filter: grayscale(100%);
	}

  .box16{text-align:center;color:#fff;position:relative; width:100%; max-height: 320px; overflow: hidden}
  .box16 .box-content,.box16:after{width:100%;position:absolute;left:0; min-width: 300px}
  .box16:after{content:"";height:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.08) 69%,rgba(0,0,0,.76) 100%);top:0;transition:all .5s ease 0s}
  .box16 .post,.box16 .title{transform:translateY(50px);transition:all .4s cubic-bezier(.13,.62,.81,.91) 0s; display:none}
  .box16:hover:after{background:linear-gradient(to bottom,rgba(154,23,91, 0.01) 0,rgba(154,23,91,.09) 11%,rgba(154,23,91,.12) 13%,rgba(154,23,91,.19) 20%,rgba(154,23,91,.29) 28%,rgba(154,23,91,.29) 29%,rgba(154,23,91,.42) 38%,rgba(154,23,91,.46) 43%,rgba(154,23,91,.53) 47%,rgba(154,23,91,.75) 69%,rgba(154,23,91,.87) 84%,rgba(154,23,91,.98) 99%,rgba(154,23,91,.94) 100%)}
  .box16 img{width:100%;height:auto;min-width:310px; vertical-align:middle}
  .box16:hover img{ -webkit-filter: grayscale(0%);filter: grayscale(0%);}
  .box16 .box-content{padding:20px;margin-bottom:10px;bottom:0;z-index:1}
  .box16 .title{font-size:22px;font-weight:700;text-transform:uppercase;margin:0 0 10px}
  .box16 .post{display:none;padding:8px 0;font-size:15px}
  .box16 .social li a,.box17 .icon li a{border-radius:50%;font-size:20px;color:#fff}
  .box16:hover .post,.box16:hover .title{transform:translateY(100px); display:block }
  .box16 .social{list-style:none;padding:0 0 5px;margin:100px 0 25px;opacity:0;position:relative;transform:perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);transition:all .6s cubic-bezier(0,0,.58,1) 0s}
  .box16:hover .social{opacity:1;transform:perspective(500px) rotateX(0) rotateY(0) rotateZ(0)}
  .box16 .social:before{content:"";width:50px;height:2px;background:#fff;margin:0 auto;position:absolute;top:-10px;left:0;right:0}
  .box16 .social li{display:inline-block}
  .box16 .social li a{display:block;width:40px;height:40px;line-height:40px;background:#6d3795;margin-right:10px;transition:all .3s ease 0s}
  .box17 .icon li,.box17 .icon li a{display:inline-block}
  .box16 .social li a:hover{background:#bea041}
  .box16 .social li:last-child a{margin-right:0}
  @media only screen and (max-width:990px){.box16{margin-bottom:30px}}



.box15{text-align:center;color:#fff;position:relative; width:100%; max-height: 320px; overflow: hidden}
  .box15 .box-content,.box15:after{width:100%;position:absolute;left:0; min-width: 300px}
  .box15:after{content:"";height:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.08) 69%,rgba(0,0,0,.76) 100%);top:0;transition:all .5s ease 0s}
  .box15 .post,.box15 .title{transform:translateY(50px);transition:all .4s cubic-bezier(.13,.62,.81,.91) 0s; display:none}
  .box15:hover:after{background:linear-gradient(to bottom,rgba(80,105,195, 0.01) 0,rgba(80,105,195,.09) 11%,rgba(80,105,195,.12) 13%,rgba(80,105,195,.19) 20%,rgba(80,105,195,.29) 28%,rgba(80,105,195,.29) 29%,rgba(80,105,195,.42) 38%,rgba(80,105,195,.46) 43%,rgba(80,105,195,.53) 47%,rgba(80,105,195,.75) 69%,rgba(80,105,195,.87) 84%,rgba(80,105,195,.98) 99%,rgba(80,105,195,.94) 100%)}
  .box15 img{width:100%;height:auto;min-width:310px; vertical-align:middle}
  .box15:hover img{ -webkit-filter: grayscale(0%);filter: grayscale(0%);}

  .box15 .box-content{padding:20px;margin-bottom:10px;bottom:0;z-index:1}
  .box15 .title{font-size:22px;font-weight:700;text-transform:uppercase;margin:0 0 10px}
  .box15 .post{display:none;padding:8px 0;font-size:15px}
  .box15 .social li a,.box17 .icon li a{border-radius:50%;font-size:20px;color:#fff}
  .box15:hover .post,.box15:hover .title{transform:translateY(100px); display:block }
  .box15 .social{list-style:none;padding:0 0 5px;margin:100px 0 25px;opacity:0;position:relative;transform:perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);transition:all .6s cubic-bezier(0,0,.58,1) 0s}
  .box15:hover .social{opacity:1;transform:perspective(500px) rotateX(0) rotateY(0) rotateZ(0)}
  .box15 .social:before{content:"";width:50px;height:2px;background:#fff;margin:0 auto;position:absolute;top:-10px;left:0;right:0}
  .box15 .social li{display:inline-block}
  .box15 .social li a{display:block;width:40px;height:40px;line-height:40px;background:#6d3795;margin-right:10px;transition:all .3s ease 0s}
  .box17 .icon li,.box17 .icon li a{display:inline-block}
  .box15 .social li a:hover{background:#bea041}
  .box15 .social li:last-child a{margin-right:0}
  @media only screen and (max-width:990px){.box15{margin-bottom:30px}}













.botonCorreo {
    width: 240px;
    border: none;
    color: white;
    background: transparent;
    background-color: #5069C3;
    padding: 5% 10%;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    text-decoration: none;
    /* text-transform: uppercase; */
    font-size: 1em;
}

.botonCorreo:hover{
    cursor:pointer;
    color: white;
    background-color: #9A175B;
    /* cursor: default; */

}
.post{
    text-transform: uppercase;
}



  /* .box16{text-align:center;color:#fff;position:relative}
  .box16 .box-content,.box16:after{width:100%;position:absolute;left:0}
  .box16:after{content:"";height:100%;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.08) 69%,rgba(0,0,0,.76) 100%);top:0;transition:all .5s ease 0s}
  .box16 .post,.box16 .title{transform:translateY(145px);transition:all .4s cubic-bezier(.13,.62,.81,.91) 0s}
  .box16:hover:after{background:linear-gradient(to bottom,rgba(0,0,0,.01) 0,rgba(0,0,0,.09) 11%,rgba(0,0,0,.12) 13%,rgba(0,0,0,.19) 20%,rgba(0,0,0,.29) 28%,rgba(0,0,0,.29) 29%,rgba(0,0,0,.42) 38%,rgba(0,0,0,.46) 43%,rgba(0,0,0,.53) 47%,rgba(0,0,0,.75) 69%,rgba(0,0,0,.87) 84%,rgba(0,0,0,.98) 99%,rgba(0,0,0,.94) 100%)}
  .box16 img{width:100%;height:auto;}
  .box16 .box-content{padding:20px;margin-bottom:10px;bottom:0;z-index:1}
  .box16 .title{font-size:22px;font-weight:700;text-transform:uppercase;margin:0 0 10px}
  .box16 .post{display:block;padding:8px 0;font-size:15px}
  .box16 .social li a,.box17 .icon li a{border-radius:50%;font-size:20px;color:#fff}
  .box16:hover .post,.box16:hover .title{transform:translateY(0)}
  .box16 .social{list-style:none;padding:0 0 5px;margin:100px 0 25px;opacity:0;position:relative;transform:perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);transition:all .6s cubic-bezier(0,0,.58,1) 0s}
  .box16:hover .social{opacity:1;transform:perspective(500px) rotateX(0) rotateY(0) rotateZ(0)}
  .box16 .social:before{content:"";width:50px;height:2px;background:#fff;margin:0 auto;position:absolute;top:-60px;left:0;right:0}
  .box16 .social li{display:inline-block}
  .box16 .social li a{display:block;width:40px;height:40px;line-height:40px;background:#6d3795;margin-right:10px;transition:all .3s ease 0s}
  .box17 .icon li,.box17 .icon li a{display:inline-block}
  .box16 .social li a:hover{background:#bea041}
  .box16 .social li:last-child a{margin-right:0}
  @media only screen and (max-width:990px){.box16{margin-bottom:30px}} */





</style>
