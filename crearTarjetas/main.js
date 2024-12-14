const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedor-tarjetas');
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');

//opción 1 creamos la función afuera
// Forma imperativa
const crearTarjeta = (evento) => {
  evento.preventDefault();
  const valorDelTitulo = titulo.value;
  const valorDeLaDescripcion = descripcion.value;

  const nuevaTarjeta = document.createElement('div');
  const tituloDeLaTarjeta = document.createElement('h2');
  const descripcionDeLaTarjeta = document.createElement('p');

  tituloDeLaTarjeta.innerText = valorDelTitulo;
  descripcionDeLaTarjeta.innerText = valorDeLaDescripcion;

  nuevaTarjeta.appendChild(tituloDeLaTarjeta);
  nuevaTarjeta.appendChild(descripcionDeLaTarjeta);

  contenedor.appendChild(nuevaTarjeta)

}

//Forma declarativa
const crearTarjeta2 = (evento) => {
  evento.preventDefault();

  const nuevaTarjeta = `
    <div class="tarjeta">
      <h2>${titulo.value}</h2>
      <p>${descripcion.value}</p>
    </div>
  `;

  contenedor.innerHTML += nuevaTarjeta;

  formulario.reset();
}


formulario.addEventListener('submit', crearTarjeta2);