//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.








document.addEventListener("DOMContentLoaded", function (e) {
   
    
});

function mostrarProductos(url){

    let container = document.getElementById("contenedorProductos");
    let min = document.getElementById("minFiltro").value;
    let max = document.getElementById("maxFiltro").value;
    let buscar = document.getElementById("buscador").value.toLowerCase();
    const caso = document.getElementById("ordenSel").value;
    container.innerHTML = "";
    
    fetch(url)
    .then(response => response.json())
    .then(datos =>{

    switch (caso) {
        case "1":
            datos.sort(function(a,b){return a.cost - b.cost});   
        break;
        case "2":
            datos.sort(function(a,b){return b.cost - a.cost});
        break;
        case "3":
            datos.sort(function(a,b){return b.soldCount - a.soldCount});
        break;
    }        

    datos.forEach(element => {
        
        if((min == undefined || (min != undefined && min <= element.cost)) &&
            (max == undefined || (max != undefined && max >= element.cost)) && 
            (element.name.toLowerCase().includes(buscar) || element.description.toLowerCase().includes(buscar))){

                container.innerHTML += `
                <a href="#" id="itemDeLista" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class=""><strong>`+ element.name + `</strong></h4>
                            </div>
                            <p class="mb-1 text-left">` + element.description + `</p>
                            <div class="text-left">
                                <strong>Precio: ` + element.cost + ` ` + element.currency + `</strong>
                            </div>   
                        </div>
                    </div>
                </a>
                `

        }
    

    });

    }).catch("No se ha podido cargar informacion")

}
    

function limpiarFiltros(url){
    document.getElementById("minFiltro").value = 0;
    document.getElementById("maxFiltro").value = 150000;
    mostrarProductos(url);
}

function limpiarBusqueda(url){
    document.getElementById("buscador").value = "";
    mostrarProductos(url);
}





