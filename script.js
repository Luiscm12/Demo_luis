
// Seleccionar el botón y el párrafo por su ID
const boton = document.querySelector("#btn-mensaje");
const mensaje = document.querySelector("#mensaje");

// Escuchar el clic para cambiar el texto y color
boton.addEventListener("click", function() {
    mensaje.textContent = "🎉 ¡Obtuviste un 10% de descuento en tu consumo!";
    mensaje.style.color = "#27ae60";
    mensaje.style.fontWeight = "bold";
});

// Seleccionar el formulario y el contenedor de mensajes
const formReservacion = document.querySelector("#form-reservacion");
const mensajeForm = document.querySelector("#mensaje-form");

formReservacion.addEventListener("submit", function(event) {
    // Evitar que la página se recargue al enviar
    event.preventDefault();

    // Obtener valores de los campos y limpiar espacios con trim()
    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const personas = document.querySelector("#personas").value.trim();

    // 1. Validar campos vacíos
    if (nombre === "" || email === "" || personas === "") {
        mensajeForm.textContent = "Por favor, llena todos los campos.";
        mensajeForm.style.color = "#e74c3c";
        return;
    }

    // 2. Validar formato de email (debe contener '@' y '.')
    if (!email.includes("@") || !email.includes(".")) {
        mensajeForm.textContent = "Por favor, ingresa un correo electrónico válido (debe incluir @ y .).";
        mensajeForm.style.color = "#e74c3c";
        return;
    }

    // 3. Regla del negocio: número de personas entre 1 y 20
    const numPersonas = Number(personas);
    if (isNaN(numPersonas) || numPersonas < 1 || numPersonas > 20) {
        mensajeForm.textContent = "El número de personas debe ser entre 1 y 20.";
        mensajeForm.style.color = "#e74c3c";
        return;
    }

    // 4. Si todo está correcto, mostrar mensaje de éxito
    mensajeForm.textContent = "Reservación realizada con éxito! Te esperamos.";
    mensajeForm.style.color = "#27ae60";

    // Opcional: limpiar los campos del formulario
    formReservacion.reset();
});