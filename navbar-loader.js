document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor donde se cargará la barra de navegación
    var navbarContainer = document.getElementById("navbar-container");

    // Crea una solicitud AJAX para cargar el contenido de la barra de navegación
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navbar.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Inserta el HTML de la barra de navegación en el contenedor
            navbarContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});