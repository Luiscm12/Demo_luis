// Prueba inicial en la consola
console.log("hola");

// Seleccionar el botón y el párrafo por su ID
const boton = document.querySelector("#btn-mensaje");
const mensaje = document.querySelector("#mensaje");

// Escuchar el clic para cambiar el texto y color
boton.addEventListener("click", function() {
    mensaje.textContent = "🎉 ¡Obtuviste un 10% de descuento en tu consumo!";
    mensaje.style.color = "#27ae60";
    mensaje.style.fontWeight = "bold";
});