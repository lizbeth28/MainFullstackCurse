function changeTitle() {
    var title = document.getElementById('title')
    var firstname = document.getElementById('firstname');
    
    title.innerHTML='Hola ' + firstname.value;
}
