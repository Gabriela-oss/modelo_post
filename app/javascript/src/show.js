export default function show(e){
  const url = e.target.href //e es el evento .target es propio del evento 
  console.log (url)
  fetch(url, { //fetch es una funcion de js, le ponemos la direccion  
    method: 'GET',
    headers: { 'Accept': 'application/json' }//para forzar a q el retorno sea un json y no tener q especificarlo  en el formato o un url osea no poner en el navegador la direccion /post.json
  }).then(data => data.json())
    .then(post => renderHTML(post)) //vamos a lamar una funcion q nos ayude a generar el html del post
    .then(post => document.querySelector('#post-content').innerHTML = post)
}

function renderHTML(post){
  return  `<p>${post.title}</p>
  <p>${post.content}</p>
  <p><time datetime="time">${post.created_At}</time></p>`
}
