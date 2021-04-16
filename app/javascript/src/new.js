export default function(){
  const html = createHTML()
  document.querySelector('#post-content').innerHTML = html
}

function createHTML(){
  return `<form action="/posts" method="POST" id="post_create">
  <div class="field">
    <label for="post_title">Title</label><br /> 
    <input type="text" name="post_title">
  </div>
  <div class="field">
    <label for="post_content">Content</label><br />
    <textarea name="post_content" cols="30" rows="10"></textarea>
  </div>
  <input type="submit" value="Crete Post">
</form>`
}
//el for del label tiene q ser igual al for del name
 //name es el aributo mas importante de un imput