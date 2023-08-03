// Crear una función que se ejecute cuando se haga clic en un elemento
function obtenerId(evento) {
    // Obtener el elemento que fue cliqueado
    var elemento = evento.target;
  
    // Obtener el id del elemento, si tiene
    var id = elemento.id || "Sin id";
    
    return id;
  }
  
  // Añadir un escuchador de eventos a toda la web
  document.addEventListener("click", obtenerId);
  