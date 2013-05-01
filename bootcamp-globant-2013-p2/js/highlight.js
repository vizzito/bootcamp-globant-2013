function highlight($id, name){
  $id.html($id.text().replace(name, '<span class="highlight">'+name+'</span>'));
}