//TODO LIST
const form = document.querySelector('form');
const list = document.getElementById('list');
const item = document.getElementById('item');

//Ajouter des éléments à la liste
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    storage(); //Ici on appelle la fonction storage() pour qu'à chaque fois qu'on ajoute un élément il puisse être stocké
    item.value = '';
})

//Supprimer des éléments de la liste
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('checked')){
        e.target.remove();
    }else{
        e.target.classList.add('checked');
    }
    storage(); //Ici on actualise le stockage
})

//Stockage
function storage(){
    window.localStorage.todoList = list.innerHTML;
}

//Garder en mémoire le Storage
function getValues() {
    let storageContent = window.localStorage.todoList;
    if(!storageContent) {
        list.innerHTML = 
            '<li>Cliquez sur un élément pour le supprimer</li>';
    }else{
        list.innerHTML = storageContent; //Sinon on récupère la valeur du storage
    }
}
getValues();


//DARK MODE
const darkMode = document.getElementById('dark-mode');
darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})
