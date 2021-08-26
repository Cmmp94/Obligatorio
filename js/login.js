//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function logear(){
    window.location.href = "inicio.html";
}

function recordarUsuario(){
    const usuario = document.getElementById("inputEmail").value;
    localStorage.setItem('username', usuario);
    alert(localStorage.getItem('username'));
}