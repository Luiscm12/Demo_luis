const boton = document.querySelector("#btn-mensaje");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = " ¡Obtuviste un 10% de descuento en tu consumo!";
    mensaje.style.color = "#27ae60";
    mensaje.style.fontWeight = "bold";
});

const formReservacion = document.querySelector("#form-reservacion");
const mensajeForm = document.querySelector("#mensaje-form");


formReservacion.addEventListener("submit", async function(event) {
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

    
    mensajeForm.textContent = "Enviando reservación...";
    mensajeForm.style.color = "#f39c12"; 

    try {
        const datos = {
            nombre: nombre,
            correo: email, 
            personas: numPersonas
        };

        const respuesta = await fetch('/api/reservaciones', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {
            mensajeForm.textContent = "¡Reservación guardada con éxito en la base de datos!";
            mensajeForm.style.color = "#27ae60"; 
            formReservacion.reset();
        } else {
            mensajeForm.textContent = "Hubo un error en el servidor. Intenta de nuevo.";
            mensajeForm.style.color = "#e74c3c"; 
        }
    } catch (error) {
        console.error("Error al enviar:", error);
        mensajeForm.textContent = "No hay conexión con la base de datos.";
        mensajeForm.style.color = "#e74c3c";
    }
});