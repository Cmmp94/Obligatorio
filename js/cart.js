//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



let contenedor = document.getElementById("contenedorCarrito");
let carrito = [];
let i = 0;

document.addEventListener("DOMContentLoaded", function(e){
    fetch(CART_INFO_URL)
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


function validarEnvío(){
    let calle = document.getElementById("calle").value;
    let numero = document.getElementById("numero").value;
    let esquina = document.getElementById("esquina").value;
    if(calle != "" && numero != "" && esquina != ""){
        return true;
    }else{
        return false;
    }
}

function validarPago(){
    let opt = document.getElementById("metPago").value;
    let resultadoPago;
    if(opt == 1){//Chequear transf bancaria
        if(document.getElementById("nroCuenta").value != ""){
            resultadoPago = true;
        }else{
            resultadoPago = false;
        }    
    }else{//Chequear tarj crédito
        if(document.getElementById("nroTarjeta").value != "" &&
        document.getElementById("cvc").value != "" &&
        document.getElementById("vencimiento").value != ""){
            resultadoPago = true;
        }else{
        resultadoPago = false;
        }
    }
    return resultadoPago;
}


function finalizarCompra(){
    document.getElementById("alerta").setAttribute("hidden", true);
    document.getElementById("alertaEnvio").setAttribute("hidden", true);
    document.getElementById("alertaPago").setAttribute("hidden", true);
    let v1 = validarPago();
    let v2 = validarEnvío();
    if(v1 && v2){
       document.getElementById("exito").removeAttribute("hidden", true);
       setTimeout(() => {
          window.location.href = "inicio.html"; 
       }, 4500);
       return true;
    }else{
        document.getElementById("alerta").removeAttribute("hidden");
        if(!v1){
        document.getElementById("alertaPago").removeAttribute("hidden");
        }
            
        if(!v2){
            document.getElementById("alertaEnvio").removeAttribute("hidden");
        }
        
       return false;
   }
}
        
 

