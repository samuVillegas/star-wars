import {personajes} from "../data/personajes.js"

//Donde ingresar lo que voy repetir
const items = document.getElementById('items');
//Plantilla que voy a utilizar
const templateCard = document.getElementById('template-card').content;
//Fragment me ayuda a clonar los elementos
const fragment = document.createDocumentFragment();
//Guardar info de likes
const likes = {};


document.addEventListener('DOMContentLoaded', () => {
    loadData(personajes);
})

const loadData = data => {
    data.forEach(personaje => {
        const {id,name,image} = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });

    items.appendChild(fragment);
}

items.addEventListener('click', e => {
    addLike(e);
})


const addLike = e => {
    if(e.target.classList.contains('btn-dark')){
        setLike(e.target.parentElement)
    }
}

const setLike = obj => {
    const boton = {
        id: obj.querySelector('.btn-dark').dataset.id,
        cantidad: 1
    }

    if(likes.hasOwnProperty(boton.id)){
        boton.cantidad = likes[boton.id].cantidad + 1;
    }

    obj.querySelector('#like').textContent = boton.cantidad;

    likes[boton.id] = {...boton}
}


