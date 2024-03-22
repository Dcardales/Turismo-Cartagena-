
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);


var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");



function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

// Definir los perfiles de usuario y sus menús
var perfilesUsuarios = {
    "admin": {
        "perfil": "administrador",
        "nombreUsuario": "admin",
        "contraseña": "admin123",
        "menu": "<a href='#'>Dashboard</a><a href='#'>Administrar usuarios</a><a href='#'>Configuración</a>"
    },
    "ente": {
        "perfil": "ente regulador",
        "nombreUsuario": "ente",
        "contraseña": "ente123",
        "menu": "<a href='#'>Dashboard</a><a href='#'>Perfil</a><a href='#'>Configuración</a>"
    }
};

// Función para verificar el inicio de sesión y redirigir al menú correspondiente
function iniciarSesion() {
    // Aquí deberías verificar los datos de inicio de sesión
    var usuario = document.getElementById("nombreUsuario").value; // Suponiendo que tienes un campo de entrada para el nombre de usuario
    var contraseña = document.getElementById("contraseña").value; // Suponiendo que tienes un campo de entrada para la contraseña

    // Verificar si el usuario existe y la contraseña es correcta
    if (perfilesUsuarios.hasOwnProperty(usuario)) {
        // Si el usuario existe, verifica la contraseña
        if (contraseña === perfilesUsuarios[usuario].contraseña) {
            // Si la contraseña es correcta, redirige al menú correspondiente según el perfil del usuario
            var perfilUsuario = perfilesUsuarios[usuario].perfil;
            if (perfilUsuario === "administrador") {
                window.location.href = "http://127.0.0.1:3000/Perfil_Turista/public_html/assets/html/Menu-Admin.html#"; // Cambia "ruta_a_tu_menu_de_administrador.html" por la ruta correcta de tu menú de administrador
            } else if (perfilUsuario === "ente regulador") {
                window.location.href = "ruta_a_tu_menu_de_ente_regulador.html"; // Cambia "ruta_a_tu_menu_de_ente_regulador.html" por la ruta correcta de tu menú de ente regulador
            }
            alert("¡Bienvenido " + usuario + "!");
        } else {
            alert("Contraseña incorrecta");
        }
    } else {
        alert("Usuario no encontrado");
    }
}




// Función para mostrar el menú
function mostrarMenu(menu) {
    // Aquí deberías mostrar el menú en la interfaz de usuario
    // Por ejemplo, podrías agregar el menú al DOM en un contenedor específico
    var menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = menu;
}


