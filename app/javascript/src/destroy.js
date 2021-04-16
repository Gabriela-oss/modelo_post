export default function destroy(e) {
  const url = e.target.href //e es el evento .target es propio del evento 
  fetch(url, { //fetch es una funcion de js(un llamado ajax), le ponemos la direccion  
    method: 'DELETE',
    headers: { //para forzar a q el retorno sea un json y no tener q especificarlo  en el formato o un url osea no poner en el navegador la direccion /post.json
      'Accept': 'application/json', 
      "X-CSRF-Token": document.querySelector("[name='csrf-token']").content //va a ir a buscar a la etiqueta q tiene atributo [name='csrf-token'] y va a tomar su contenido, para q no me de error de token al momento de querer borrar algo 
    }
    }).then(data => data.json())
    .then(post => {
      const elem = document.querySelector(`#post-${post.id}`)
      elem.parentNode.removeChild(elem)
    })
}
//----------------Hicimos destroy, solo falta el alert---------------------------