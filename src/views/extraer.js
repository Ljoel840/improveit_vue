import axios from 'axios'

export default (componente) => {

    // let proyectoEnc = 'delfasport'
    // console.log('prueba')
	// console.log(process.env.VUE_APP_RUTA_API)
    axios.post(`${process.env.VUE_APP_RUTA_API}dfs60024`,{
        proyectoEnc: 'improveit',
        pagina: '/'
    })
    .then(response => {
        componente.cargando = false
        if (!response.data) {
            componente.error = 'No hay retorno de login'
        } else if (!response.data.ErrorSDT) {
            componente.error = 'No hay retorno del error'
        } else {
            componente.campos = response.data.frontBlogs
            console.log('campos')
            console.log(componente.campos)
        }

    })
    .catch(error => {
        componente.cargando = false
        componente.error = error
    })
}
