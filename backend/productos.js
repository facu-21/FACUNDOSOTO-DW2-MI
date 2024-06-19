let containerProductos = document.getElementById("containerProductos");

let productos = [
    {
        nombre: "Pancho",
        precio: 1400,
        imagen: "../imgs/productos/pancho.jpg"
    },
    {
        nombre: "Empanada",
        precio: 1400,
        imagen: "../imgs/productos/empanada.avif"
    },
    {
        nombre: "Ades",
        precio: 1200,
        imagen: "../imgs/productos/ades.jpg"
    },
    {
        nombre: "Pebete",
        precio: 1600,
        imagen: "../imgs/productos/pebete.webp"
    },
    {
        nombre: "Milanguche",
        precio: 2800,
        imagen: "../imgs/productos/sanguchedemilanesa.jpg"
    },
    {
        nombre: "Pochoclos",
        precio: 1300,
        imagen: "../imgs/productos/pochoclos.jpg"
    },
    {
        nombre: "Pizza",
        precio: 900,
        imagen: "../imgs/productos/pizza.jpg"
    },
];

console.log(productos);

for(let i=0; i<=productos.length-1; i++){
    let producto = document.createElement("div");
    producto.classList = "producto";
    producto.innerHTML = `
        <img src="${productos[i].imagen}" alt="${productos[i].nombre}" class="productoImagen">
        <div class="productoDescripcion">
            <div class="productoDescripcionDiv">
                <div class="texto">${productos[i].nombre}</div>
                <div class="texto">${productos[i].precio}</div>
            </div>
        </div>
    `;
    containerProductos.appendChild(producto);
}