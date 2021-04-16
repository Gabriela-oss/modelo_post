import {createHTML} from './index'                                                //aqui importo al createHTML desde el index.js
export default function create(e) {
  const post = createObj(e.target)
    fetch(e.target.action, {
        method: e.target.method,
        headers: {                                                                //es el contenido q le vamo a pasar al servidor para autenticarnos
            'Accept': 'application/json',                                         //es una validacion de que mi info del formulario es de mi misma app
            'Content-Type': 'application/json',
            "X-CSRF-Token": document.querySelector("[name='csrf-token']").content
        },
        body: JSON.stringify(post)                                                //toma un objeto y lo tranforma a json y lo envia al servidor 
    }).then(data => data.json())                                                  //es la info q viene desde fetch, lo q recibo de json lo convierte a un objeto de js
      .then(post => {
        const table = document.querySelector('#posts tbody')
        table.insertAdjacentHTML('beforeend',createHTML(post))

        e.target.post_title.value = ''                                            //para borrar el contenido que queda en el content y title despues de crear un post
        e.target.post_content.value = ''                                          //para borrar el contenido que queda en el content y title despues de crear un post
      })
} 

function createObj(target) {
  return {                                                                        //vamos a retornar un objeto, si nosoros abrimos llaves y no es con una funcion, va a ser un objeto
      post: {                                                                     //target en este caso es el formulario, el formulario tiene un input 'post_title' y el .value va a ir al input y me va a dar el valor de ese input 
          title: target.post_title.value,
          content: target.post_content.value
      }
  }
}
//-----------------Aqui no me sale aun en el index pero ya crea post---------------------

