/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
    })
  }
}
showMenu('nav-toggle', 'navbar', 'body-pd')

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')
function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for (i = 0; i < linkCollapse.length; i++) {
  linkCollapse[i].addEventListener('click', function () {
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}

// Función para abrir la ventana modal
function abrirModal() {
  document.getElementById("modalCambiarContraseña").style.display = "block";
}

// Función para cerrar la ventana modal
function cerrarModal() {
  document.getElementById("modalCambiarContraseña").style.display = "none";
}

// Evento para abrir la ventana modal al hacer clic en el botón "Cambiar Contraseña"
document.getElementById("btnCambiarContraseña").addEventListener("click", abrirModal);

// Evento para cerrar la ventana modal al hacer clic en el botón de cerrar
document.getElementsByClassName("close")[0].addEventListener("click", cerrarModal);
