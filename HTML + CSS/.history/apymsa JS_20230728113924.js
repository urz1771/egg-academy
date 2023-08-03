
// Crear una función que se ejecuta cuando se hace click en algún elemento de la web
function handleClick(event) {
  // Obtener el elemento que fue clickeado
  let target = event.target;

  // Obtener la clase del elemento, si tiene
  let clase = target.className || "Sin clase";

  //obtener
  
  
}

// Añadir un listener al objeto document que llama a la función handleClick cuando se hace click
document.addEventListener("click", handleClick);




//_________________________________//------------------------------//
// Obtener el texto dividido del h3 de la página de buscar repuesto por vehiculo /producto/buscar

function busqueda() {
    var h3 = document.querySelector("#frmFiltros > div.row > div > div > h3");
    var texto1 = h3.textContent;
    var indice = texto1.indexOf(":");
    var resto = texto1.substring(indice + 1);
    return resto;
}


function gracias() {
    var h2 = document.querySelector ("#main > main > section > div > div > h2.pt-32.font-sans-regular.text-eggplant-100.text-h500.text-center");
    var text = (h2.textContent);
    return text;
}

document.querySelector("#main > main > section > div.flex.flex-col.place-content-center.col-span-4.col-start-5.\\32 xl\\:col-span-5.\\32 xl\\:col-start-4.px-16.md\\:px-0.js-show-on-scroll.opacity-0.animate-fadeIn > div > form")


// Seleccionar el elemento donde se va a añadir el botón
let contenedor = document.querySelector("#main > main > section > div > div");

// Crear una función que se ejecute cuando se detecte un cambio
function callback(mutaciones) {
  // Recorrer las mutaciones
  for (let mutacion of mutaciones) {
    // Si se ha añadido algún nodo
    if (mutacion.addedNodes.length > 0) {
      // Recorrer los nodos añadidos
      for (let nodo of mutacion.addedNodes) {
        // Si el nodo es un botón
        if (nodo.tagName === "BUTTON") {
          // Mostrar un mensaje en la consola
          console.log("Se ha añadido un botón");
        }
      }
    }
  }
}

// Crear una instancia de MutationObserver y pasarle la función callback
let observador = new MutationObserver(callback);

// Configurar las opciones de observación: solo los nodos hijos, no los atributos ni el texto
let opciones = { childList: true };

// Iniciar la observación del contenedor
observador.observe(contenedor, opciones);
