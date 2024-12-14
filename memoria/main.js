const grid = document.getElementById('grid');

//arreglo de 8 colores
const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown'];

//pares de colores
const paresDeColores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown'];

paresDeColores.sort(() => Math.random() - 0.5);
//Math.random() genera un número al azar entre 0 y 1 
// supongamos que Math.random() genera 0.3 y le restamos 0.5 = -0.2
// Math.random() me genera 0.8 y le restamos 0.5 = 0.3


paresDeColores.forEach((color) => {
  const boton = document.createElement('button');
  boton.dataset.color = color;
  boton.style.backgroundColor = color;

  setTimeout(()=>{
    boton.style.backgroundColor = 'white';
  }, 2000)

  grid.appendChild(boton);
});

let primerBotonPresionado = null;
let segundoBotonPresionado = null;

grid.addEventListener('click', (evento) => {

  const botonPresionado = evento.target;
  botonPresionado.style.backgroundColor = botonPresionado.dataset.color;

  if(primerBotonPresionado === null) {
    primerBotonPresionado = botonPresionado;
  } else if (!segundoBotonPresionado && botonPresionado !== primerBotonPresionado) {
    segundoBotonPresionado = botonPresionado;

    //Verificar si son pares de colores
    if(
      primerBotonPresionado.dataset.color === segundoBotonPresionado.dataset.color
    ) {
      alert('Pillamos un par!');
      primerBotonPresionado = null;
      segundoBotonPresionado = null;
    } else {
      setTimeout(() => {
        primerBotonPresionado.style.backgroundColor = 'white';
        segundoBotonPresionado.style.backgroundColor = 'white';
        primerBotonPresionado = null;
        segundoBotonPresionado = null;
      }, 500);
    }
  }
});
