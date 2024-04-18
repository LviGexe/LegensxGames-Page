document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("DOMContentLoaded", function() {
        const carrito = document.getElementById("carrito");
        const iconoCarrito = document.getElementById("iconoCarrito");
    
        iconoCarrito.addEventListener("mouseenter", function() {
            carrito.classList.remove("cerrado");
        });
    
        iconoCarrito.addEventListener("mouseleave", function() {
            carrito.classList.add("cerrado");
        });
    });
    const juegos = [
        { nombre: "God Of War Ragnarok", precio: 110000 },
        { nombre: "League Of Legends", precio: 0 },
        { nombre: "The Last Of Us Part II", precio: 150000 }
    ];
    let carrito = [];
    let total = 0;

    const listaProductos = document.getElementById("lista-productos");
    const totalElement = document.getElementById("total");
    function mostrarProductos() {
        listaProductos.innerHTML = "";
        carrito.forEach((producto) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add("producto");
            productoDiv.innerHTML = `
                <h6>${producto.nombre}</h6>
                <p>${producto.precio}</p>
            `;
            listaProductos.appendChild(productoDiv);
        });
        totalElement.innerText = total.toFixed(2);
    }
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        total += producto.precio;
        mostrarProductos();
    }
    document.querySelectorAll(".agregar-carrito").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            agregarAlCarrito(juegos[index]);
        });
    });
    document.getElementById("pagar").addEventListener("click", () => {
        alert("¡Gracias por tu compra!");
        carrito = [];
        total = 0;
        mostrarProductos();
    });
});