//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

function cargarProductos(url){
    let container = document.getElementById("contenedorProductos");
    container.innerHTML = "";
    fetch(url)
    .then(response => response.json())
    .then(datos => {
        datos.forEach(elemento => {
            container.innerHTML += `
            <a href="#" id="itemDeLista" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class=""><strong>`+ elemento.name +`</strong></h4>
                         </div>
                         <p class="mb-1 text-left">` + elemento.description + `</p>
                         <div class="text-left">
                            <strong>Precio: ` + elemento.cost + ` ` + elemento.currency + `</strong>
                         </div>   
                    </div>
                </div>
            </a>
            `
        });
    })
    .catch("No se ha podido cargar informacion")
}
   

function filter(url){
    const min = document.getElementById("MinFiltro").value;
    const max = document.getElementById("MaxFiltro").value;

    let container = document.getElementById("contenedorProductos");
    container.innerHTML = "";
    fetch(url)
    .then(response => response.json())
    .then(datos => {
        datos.forEach(elemento => {
            if( ((min == undefined) || (min != undefined && elemento.cost >= min)) && 
                ((max == undefined) || (max != undefined && elemento.cost <= max))){
            container.innerHTML += `
            <a href="#" id="itemDeLista" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class=""><strong>`+ elemento.name +`</strong></h4>
                         </div>
                         <p class="mb-1 text-left">` + elemento.description + `</p>
                         <div class="text-left">
                            <strong>Precio: ` + elemento.cost + ` ` + elemento.currency + `</strong>
                         </div>   
                    </div>
                </div>
            </a>
            `
            }
        });
    })
    .catch("No se ha podido cargar informacion")
        
}

function limpiarFiltro(url){
    cargarProductos(url);
    document.getElementById("MinFiltro").value = "0";
    document.getElementById("MaxFiltro").value = "50000"
}
