//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let urlInfo = PRODUCT_INFO_URL;
let urlComentarios = PRODUCT_INFO_COMMENTS_URL;


document.addEventListener("DOMContentLoaded", function(e){
    let container = document.getElementById("infoContainer");
    let comentarios = document.getElementById("comentariosContainer");
    let imgContainer = document.getElementById("imgContainer");
    fetch(urlInfo)
    .then(response => response.json())
    .then(datos =>{
        
        container.innerHTML +=  `
        
        <h3 class="text-right">${datos.name}</h3>
        <p class="font-weight-light">${datos.soldCount} vendidos</p>
        <p class="text-right">${datos.description}</p>
        <h6 class="ml-1 float-right d-inline">${datos.cost}</h6>
        <h6 class="float-right d-inline">Precio: ${datos.currency}</h6>
               
        `
        
        datos.images.forEach(element => {
            imgContainer.innerHTML+=`
            <img class="d-inline w-100" src="${element}">            
            `
        });



        })
    .catch("No se pudo cargar la informacion del producto");

    fetch(urlComentarios)
    .then(response => response.json())
    .then(datos =>{
        datos.forEach(element => {

            let calif = element.score;

            switch (calif) {
                case 1:
                    comentarios.innerHTML += `
                    
                    <div class="p-1 border border-secondary mb-1 p-auto text-left">
                        <h5 class="d-inline mr-2">${element.user}</h5>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>${element.dateTime}</p>
                        <p>${element.description}</p>
                    </div>

                    `    
                    break;
                case 2:
                    comentarios.innerHTML += `
                    
                    <div class="p-1 border border-secondary mb-1 p-auto text-left">
                        <h5 class="d-inline mr-2">${element.user}</h5>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>${element.dateTime}</p>
                        <p>${element.description}</p>
                    </div>

                    `
                    break;
                case 3:
                    comentarios.innerHTML += `
                    
                    <div class="p-1 border border-secondary mb-1 p-auto text-left">
                        <h5 class="d-inline mr-2">${element.user}</h5>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p>${element.dateTime}</p>
                        <p>${element.description}</p>
                    </div>

                    `
                    break;
                case 4:
                    comentarios.innerHTML += `
                    
                    <div class="p-1 border border-secondary mb-1 p-auto text-left">
                        <h5 class="d-inline mr-2">${element.user}</h5>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <p>${element.dateTime}</p>
                        <p>${element.description}</p>
                    </div>

                    `
                    break;
                case 5:
                    comentarios.innerHTML += `
                    
                    <div class="p-1 border border-secondary mb-1 p-auto text-left">
                        <h5 class="d-inline mr-2">${element.user}</h5>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <p>${element.dateTime}</p>
                        <p>${element.description}</p>
                    </div>

                    `
                    break;
                                                    
                default:
                    break;
            }


            
        });
        
        
        
    })


});

function agregarComentario(){
    let comentario = document.getElementById("comentarioTexto").value;
    let calificacion = document.getElementById("comentarioCalif").value;
    let container = document.getElementById("comentariosContainer");
    let hora  = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
    
    if(comentario != ""){
        
        switch (calificacion) {
            case "1":
                container.innerHTML += `
                
                <div class="p-1 border border-secondary mb-1 p-auto text-left">
                    <h5 class="d-inline mr-2">${localStorage.getItem('username')}</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <p>${hora}</p>
                    <p>${comentario}</p>
                </div>

                `    
                break;
            case "2":
                container.innerHTML += `
                
                <div class="p-1 border border-secondary mb-1 p-auto text-left">
                    <h5 class="d-inline mr-2">${localStorage.getItem('username')}</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <p>${hora}</p>
                    <p>${comentario}</p>
                </div>

                `    
                break;
            case "3":
                container.innerHTML += `
                
                <div class="p-1 border border-secondary mb-1 p-auto text-left">
                    <h5 class="d-inline mr-2">${localStorage.getItem('username')}</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <p>${hora}</p>
                    <p>${comentario}</p>
                </div>

                `    
                break;
            case "4":
                container.innerHTML += `
                
                <div class="p-1 border border-secondary mb-1 p-auto text-left">
                    <h5 class="d-inline mr-2">${localStorage.getItem('username')}</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <p>${hora}</p>
                    <p>${comentario}</p>
                </div>

                `    
                break;
            case "5":
                container.innerHTML += `
                
                <div class="p-1 border border-secondary mb-1 p-auto text-left">
                    <h5 class="d-inline mr-2">${localStorage.getItem('username')}</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <p>${hora}</p>
                    <p>${comentario}</p>
                </div>

                `    
                break;
                                                
            default:
                container.innerHTML+=`<p>DALE BOBO</p>`
                break;
        }
        document.getElementById("comentarioTexto").value = "";
        document.getElementById("comentarioCalif").value = "1";
    }
}