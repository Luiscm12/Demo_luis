const boton = document.querySelector("#btn-mensaje");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = "🎉 ¡Obtuviste un 10% de descuento en tu consumo!";
    mensaje.style.color = "#27ae60";
    mensaje.style.fontWeight = "bold";
});

const formReservacion = document.querySelector("#form-reservacion");
const mensajeForm = document.querySelector("#mensaje-form");

formReservacion.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const email = document.querySelector("#email").value.trim();
    const personas = document.querySelector("#personas").value.trim();

    if (nombre === "" || email === "" || personas === "") {
        mensajeForm.textContent = "Por favor, llena todos los campos.";
        mensajeForm.style.color = "#e74c3c";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensajeForm.textContent = "Por favor, ingresa un correo electrónico válido (debe incluir @ y .).";
        mensajeForm.style.color = "#e74c3c";
        return;
    }

    const numPersonas = Number(personas);
    if (isNaN(numPersonas) || numPersonas < 1 || numPersonas > 20) {
        mensajeForm.textContent = "El número de personas debe ser entre 1 y 20.";
        mensajeForm.style.color = "#e74c3c";
        return;
    }

    mensajeForm.textContent = "Reservación realizada con éxito! Te esperamos.";
    mensajeForm.style.color = "#27ae60";

    formReservacion.reset();
});