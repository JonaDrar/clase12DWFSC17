//Seleccionar elementos por ID
const articulo1 = document.getElementById('art1');

//Seleccionar elementos por clase
const articulo2 = document.getElementsByClassName('art2');

//Seleccionar elementos por etiqueta
const articulos = document.getElementsByTagName('article'); // Nos devuelve un array con todos los elementos article

//Seleccionar elementos por selector
const articulo = document.querySelector('article'); // Nos devuelve el primer elemento article que encuentre

//Seleccionar elementos por selector
const todosLosArticulos = document.querySelectorAll('article')















const art1 = document.getElementById('art1');


// art1.innerText = 'artículo leído';


const botonCambiar = document.getElementById('boton-cambiar');

const funcionParaCambiarTexto = () => {
  art1.innerText = 'artículo leído';
}

botonCambiar.addEventListener('click', funcionParaCambiarTexto)