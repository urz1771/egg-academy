// Obtener el texto dividido del h3 de la página de buscar repuesto por vehiculo /producto/buscar

var h3 = document.querySelector("#frmFiltros > div.row > div > div > h3"); 
var texto1 = h3.textContent; 
var indice = texto1.indexOf(":"); 
var resto = texto1.substring(indice + 1); 
console.log(resto);