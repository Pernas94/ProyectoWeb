function mostrarMenu() {
     var x = document.getElementById("menu-sand");
     if (x.style.display === "block") {
          x.style.display = "none";
     } else {
          x.style.display = "block";
     }
}



function mostrarMenuLogin() {
     var x = document.getElementById("login-container");
     if (x.style.display === "block") {
          x.style.display = "none";
     } else {
          x.style.display = "block";
     }
}






function leerXML() {
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
               validarUsuario(this);
          }
     };
     xhr.open("GET", "https://pernas94.github.io/Web-Magenta/Paginas/ficheroXML.xml", true);
     xhr.send();
}








function validarUsuario(xml) {
     var i;
     var usrNom;
     var usrPsw;
     var usuario = [];
     var xmlDoc = xml.responseXML;
     var x = xmlDoc.getElementsByTagName("usuario");
     var existe = false;
     var nomForm = document.forms["InicioSesion"]["Usuario"].value;
     var passForm = document.forms["InicioSesion"]["Contraseña"].value;

     for (i = 0; i < x.length; i++) {
          usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
          usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

          if ((nomForm == usrNom) && (passForm == usrPsw)) {
               existe = true;
               break;
          }

     }
     if (existe == true) {
          sessionStorage.setItem("nomUser", document.forms["InicioSesion"]["Usuario"].value);
          var logout = document.getElementById("logout-logo");
          var login = document.getElementById("login-logo");
          login.style.display = "none";
          logout.style.display = "block";

          var loginbox = document.getElementById("login-container");
          loginbox.style.display = "none";

     } else {
          sessionStorage.removeItem("nomUser");
          window.alert("Nombre y/o contraseña incorrectos.");
     }
}



function controlarUsuarios() {
     if (sessionStorage.getItem("nomUser") != null) {
          var logout = document.getElementById("logout-logo");
          var login = document.getElementById("login-logo");
          login.style.display = "none";
          logout.style.display = "block";
     }
}


function cerrarSesion() {
     sessionStorage.removeItem("nomUser");
     var logout = document.getElementById("logout-logo");
     var login = document.getElementById("login-logo");
     logout.style.display = "none";
     login.style.display = "block";

}



function menuProductos(seleccion) {
     var todosDivs = document.getElementsByClassName("bloque");

     for (var i = 0; i < todosDivs.length; i++) {
          todosDivs[i].style.display = "none";
     }

     var x = document.getElementById(seleccion);
     x.style.display = "block";


}



function cambiarColor() {
     var menu = document.getElementById("menuCambio");
     var footer = document.getElementById("footerCambio");

     menu.style.backgroundColor="lightblue";
     footer.style.backgroundColor="lightblue";

}
