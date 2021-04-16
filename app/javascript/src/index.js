export default function index() {                                                       //estoy haciendo accesible la funcion index cuando hago un import, quiere decir estoy exportando la funcion createHTML para mostrarla o importarla en create.js
  fetch('/posts', {                                                                     //fetch es una funcion de js, le ponemos la direccion  
          method: 'GET',
          headers: { 'Accept': 'application/json' }                                     //para forzar a q el retorno sea un json y no tener q especificarlo  en el formato o un url osea no poner en el navegador la direccion /post.json
      })
      .then(response => response.json())
      .then(posts => renderPosts(posts))
      .then(posts => document.querySelector('#posts tbody').innerHTML = posts.join('')) //va a tomar el array de render posts y lo va a integrar en la tabla de los posts 
}
//estamos iterando la funcion del html 
function renderPosts(posts){
  return posts.map(post => createHTML(post))                                            //el map retorna un array del mismo largo del array original pero modificado en cambio el forEach no retorna nada  
}
//crear una funcion que haga todas las etiquetas de html  
//linea 17: le damos el id de cada post 
export function createHTML(post){
  return `<tr id="post-${post.id}"> 
  <td>${post.title}</td>
  <td><a class="post_show" href="/posts/${post.id}">Show</a></td>
  <td><a class="post_edit" href="/posts/${post.id}/edit">Edit</a></td>
  <td><a class="post_destroy" href="/posts/${post.id}">Destroy</a></td>    
</tr>`
}
// de aqui para arriba ya me muestra los posts---------------------------------------------- 
