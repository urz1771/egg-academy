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


