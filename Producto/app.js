document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const divProductos = document.querySelector('.div-productos');
    let productos = []; 

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarProducto();
    });

    function previewImage() {
        const input = document.getElementById('imagen');
        const preview = document.getElementById('imagen-preview');
        const file = input.files[0];
        const reader = new FileReader();
    
        reader.onloadend = function() {
            preview.src = reader.result;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = '';
        }
    }
    
    function agregarProducto() {
        const idProducto = document.getElementById('id_producto').value.trim();
        const nombreProducto = document.getElementById('nombre').value.trim();
        const valorMinimo = document.getElementById('valormi').value.trim();
        const valorMaximo = document.getElementById('valorma').value.trim();
        const categoria = document.getElementById('categoria').value.trim(); 

        if (idProducto === '' || nombreProducto === '' || valorMinimo === '' || valorMaximo === '') {
            alert('Por favor completa todos los campos.');
            return;
        }

        const nuevoProducto = { id: idProducto, nombre: nombreProducto, minimo: valorMinimo, maximo: valorMaximo, categoria: categoria }; // Agregar la categoría al objeto de producto
        productos.push(nuevoProducto);

        mostrarProductos();
        limpiarFormulario();
    }

    function mostrarProductos() {
        divProductos.innerHTML = '';
        productos.forEach(function(producto, index) {
            const productoHTML = `
                <div class="producto">
                    <p><strong>Código:</strong> ${producto.id}<br>
                    <strong>Nombre:</strong> ${producto.nombre}<br>
                    <strong>Valor Mínimo:</strong> ${producto.minimo}<br>
                    <strong>Valor Máximo:</strong> ${producto.maximo}<br>
                    <strong>Categoría:</strong> ${producto.categoria}</p> <!-- Mostrar la categoría -->
                    <button class="btnEditar" data-index="${index}">Editar</button>
                    <button class="btnEliminar" data-index="${index}">Eliminar</button>
                </div>
            `;
            divProductos.insertAdjacentHTML('beforeend', productoHTML);
        });

        agregarListenersBotones();
    }

    function limpiarFormulario() {
        formulario.reset();
    }

    function agregarListenersBotones() {
        const botonesEditar = divProductos.querySelectorAll('.btnEditar');
        const botonesEliminar = divProductos.querySelectorAll('.btnEliminar');

        botonesEditar.forEach(boton => {
            boton.addEventListener('click', function() {
                const index = boton.getAttribute('data-index');
                const producto = productos[index];
                editarProducto(index, producto);
            });
        });

        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', function() {
                const index = boton.getAttribute('data-index');
                eliminarProducto(index);
            });
        });
    }

    function editarProducto(index, producto) {
        const nuevoNombre = prompt('Ingresa el nuevo nombre del producto:', producto.nombre);
        const nuevoMinimo = prompt('Ingresa el nuevo valor mínimo:', producto.minimo);
        const nuevoMaximo = prompt('Ingresa el nuevo valor máximo:', producto.maximo);
        const nuevaCategoria = prompt('Ingresa la nueva categoría:', producto.categoria); // Nueva línea para obtener la nueva categoría

        if (nuevoNombre !== null && nuevoMinimo !== null && nuevoMaximo !== null && nuevaCategoria !== null) {
            producto.nombre = nuevoNombre.trim();
            producto.minimo = nuevoMinimo.trim();
            producto.maximo = nuevoMaximo.trim();
            producto.categoria = nuevaCategoria.trim(); 

            productos[index] = producto;
            mostrarProductos();
        }
    }

    function eliminarProducto(index) {
        const confirmacion = confirm('¿Estás seguro de eliminar este producto?');
        if (confirmacion) {
            productos.splice(index, 1);
            mostrarProductos();
        }
    }
});
