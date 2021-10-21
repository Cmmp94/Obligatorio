//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("pNombre").value = JSON.parse(sessionStorage.getItem("primerNombre"));
    document.getElementById("sNombre").value = JSON.parse(sessionStorage.getItem("segundoNombre"));
    document.getElementById("pApellido").value = JSON.parse(sessionStorage.getItem("primerApellido"));
    document.getElementById("sApellido").value = JSON.parse(sessionStorage.getItem("segundoApellido"));
    document.getElementById("edad").value = JSON.parse(sessionStorage.getItem("edad"));
    document.getElementById("email").value = JSON.parse(sessionStorage.getItem("email"));
    document.getElementById("tel").value = JSON.parse(sessionStorage.getItem("tel"));
        
});

function confirmar(){
    sessionStorage.setItem("primerNombre", JSON.stringify(document.getElementById("pNombre").value));
    sessionStorage.setItem("segundoNombre", JSON.stringify(document.getElementById("sNombre").value));
    sessionStorage.setItem("primerApellido", JSON.stringify(document.getElementById("pApellido").value));
    sessionStorage.setItem("segundoApellido", JSON.stringify(document.getElementById("sApellido").value));
    sessionStorage.setItem("edad", JSON.stringify(document.getElementById("edad").value));
    sessionStorage.setItem("email", JSON.stringify(document.getElementById("email").value));
    sessionStorage.setItem("tel", JSON.stringify(document.getElementById("tel").value));
    document.getElementById("modificar").removeAttribute("hidden");
    document.getElementById("confirmar").setAttribute("hidden", "true");
    document.getElementById("cancelar").setAttribute("hidden", "true");
    noEditable();
    alert("se cambio");
}

function cancelar(){
    document.getElementById("pNombre").value = sessionStorage.getItem("primerNombre");
    document.getElementById("sNombre").value = sessionStorage.getItem("segundoNombre");
    document.getElementById("pApellido").value = sessionStorage.getItem("primerApellido");
    document.getElementById("sApellido").value = sessionStorage.getItem("segundoApellido");
    document.getElementById("edad").value = sessionStorage.getItem("edad");
    document.getElementById("email").value = sessionStorage.getItem("email");
    document.getElementById("tel").value = sessionStorage.getItem("tel");
    document.getElementById("modificar").removeAttribute("hidden");
    document.getElementById("confirmar").setAttribute("hidden", "true");
    document.getElementById("cancelar").setAttribute("hidden", "true");
    noEditable();
}

function modificar(){
    document.getElementById("modificar").setAttribute("hidden", "true");
    document.getElementById("confirmar").removeAttribute("hidden");
    document.getElementById("cancelar").removeAttribute("hidden");
    editable();
}

function editable(){
    document.getElementById("pNombre").removeAttribute("readonly")
    document.getElementById("sNombre").removeAttribute("readonly") 
    document.getElementById("pApellido").removeAttribute("readonly")
    document.getElementById("sApellido").removeAttribute("readonly") 
    document.getElementById("edad").removeAttribute("readonly")
    document.getElementById("email").removeAttribute("readonly") 
    document.getElementById("tel").removeAttribute("readonly") 
    
    document.getElementById("pNombre").classList.add("bg-white");
    document.getElementById("sNombre").classList.add("bg-white"); 
    document.getElementById("pApellido").classList.add("bg-white");
    document.getElementById("sApellido").classList.add("bg-white"); 
    document.getElementById("edad").classList.add("bg-white");
    document.getElementById("email").classList.add("bg-white"); 
    document.getElementById("tel").classList.add("bg-white"); 
    
}

function noEditable(){
    document.getElementById("pNombre").setAttribute("readonly", "true")
    document.getElementById("sNombre").setAttribute("readonly", "true") 
    document.getElementById("pApellido").setAttribute("readonly", "true")
    document.getElementById("sApellido").setAttribute("readonly", "true") 
    document.getElementById("edad").setAttribute("readonly", "true")
    document.getElementById("email").setAttribute("readonly", "true") 
    document.getElementById("tel").setAttribute("readonly", "true") 
    
    document.getElementById("pNombre").classList.remove("bg-white");
    document.getElementById("sNombre").classList.remove("bg-white");
    document.getElementById("pApellido").classList.remove("bg-white");
    document.getElementById("sApellido").classList.remove("bg-white"); 
    document.getElementById("edad").classList.remove("bg-white");
    document.getElementById("email").classList.remove("bg-white"); 
    document.getElementById("tel").classList.remove("bg-white"); 
}