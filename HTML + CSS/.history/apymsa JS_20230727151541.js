// Obtener el texto dividido del h3 de la página de buscar repuesto por vehiculo /producto/buscar

function busqueda() {
    var h3 = document.querySelector("#frmFiltros > div.row > div > div > h3");
    var texto1 = h3.textContent;
    var indice = texto1.indexOf(":");
    var resto = texto1.substring(indice + 1);
    return resto;
}


function () {
    var h2 = document.querySelector ("#main > main > section > div > div > h2.pt-32.font-sans-regular.text-eggplant-100.text-h500.text-center");
    var text = h2.text;
    return text;
}