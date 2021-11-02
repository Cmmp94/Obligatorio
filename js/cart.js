//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const CART_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";

let contenedor = document.getElementById("contenedorCarrito");
let carrito = [];
let i = 0;

document.addEventListener("DOMContentLoaded", function(e){
    fetch(CART_URL)
    .then(response => response.json())
    .then(datos =>{

        datos.articles.forEach(element => {
            carrito.push(
                {"name": element.name,
                "precio": element.unitCost,
                "cantidad": element.count,
                "moneda": element.currency
                })

            contenedor.innerHTML += `
            <tr id="${element.name}">
                <th>${element.name}</th>
                <td>${element.unitCost}</td>
                <td>${element.count}</td>
                <td><button class="btn btn-primary" onclick="añadirAlCarrito(${i})"></td>
                <td><button class="btn btn-danger" onclick="quitarDelCarrito(${i})"></td>
                <td>${element.currency}</td>
                <td>${element.unitCost * element.count}</td>
            </tr>
            `  
            i++; 
            cargarFactura();
        });
    
    })
    
});



function añadirAlCarrito(i){
    carrito[i].cantidad ++;
    refrescarCarrito(i);
}

function quitarDelCarrito(i){
    if(carrito[i].cantidad > 0){
        carrito[i].cantidad --;
        refrescarCarrito(i);
    }
}

function refrescarCarrito(i){
    contenedor.children[i].children[2].innerHTML = carrito[i].cantidad;
    contenedor.children[i].children[6].innerHTML = carrito[i].cantidad * carrito[i].precio;
    
    cargarFactura();
}

function cargarFactura(){
    let subtotalCont = document.getElementById("subtotal");
    let costoEnvioCont = document.getElementById("costEnvio");
    let totalCont = document.getElementById("total");
   

    subtotalCont.innerHTML = "Subtotal: $" + `${calcularSubtotal()}`;   
    costoEnvioCont.innerHTML = "Costo de Envío: $" + `${calcularEnvio()}`;  
    totalCont.innerHTML = "Total: $" + `${parseInt(calcularSubtotal()) + parseInt(calcularEnvio())}`;
    
}

function calcularSubtotal(){
    let res = 0;
    carrito.forEach(element => {
        if(element.moneda == "USD"){
            res += element.precio*40*element.cantidad;
        }else{
            res += element.precio*element.cantidad; 
        }
    });
    return res;
}

function calcularEnvio(){
    const key = document.getElementById("metEnvio").value;
    switch (key) {
        case "1":
            return (calcularSubtotal()*0.15).toFixed();
            break;
        case "2":
            return (calcularSubtotal()*0.07).toFixed();
            break;
        case "3":
            return (calcularSubtotal()*0.05).toFixed();
            break;
    
        default:
        break;
    }   
}

function updateMetPago(){
    let selectValue = document.getElementById("metPago").value;
    let divTarj = document.getElementById("inputTarjeta");
    let divCuenta = document.getElementById("inputCuenta");
    if(selectValue == 1){
        divTarj.setAttribute("hidden", false);
        divCuenta.removeAttribute("hidden");
    }
    if(selectValue == 2){
        divCuenta.setAttribute("hidden", false);
        divTarj.removeAttribute("hidden");
    }
}

