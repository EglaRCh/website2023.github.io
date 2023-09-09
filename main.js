// Mensaje de saludo
var greeting = "Bienvenid@ a tu página";

// Obtener el elemento de saludo
var saludoElement = document.getElementById("saludo");

// Función para mostrar el saludo con efecto typewriter
function typeWriter() {
    var i = 0;
    var speed = 70; // Velocidad de escritura en milisegundos

    function type() {
        if (i < greeting.length) {
            saludoElement.textContent += greeting.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Reiniciar el efecto después de un breve retraso
            setTimeout(resetTypeWriter, 4000);
        }
    }

    // Iniciar el efecto typewriter
    type();
}

// Función para reiniciar el efecto typewriter
function resetTypeWriter() {
    saludoElement.textContent = "";
    typeWriter(); // Iniciar el efecto nuevamente
}

// Llamar a la función para iniciar el efecto typewriter
typeWriter();

//Botón con evento al hacer click//

// Obtener elementos del DOM
const cantidadElement1 = document.getElementById('cantidad1');
const agregarButton1 = document.getElementById('agregar1');

let cantidad1 = 0;

// Agregar evento de clic al botón
agregarButton1.addEventListener('click', () => {
    cantidad1++;
    cantidadElement1.textContent = cantidad1;
});

const cantidadElement2 = document.getElementById('cantidad2');
const agregarButton2 = document.getElementById('agregar2');

let cantidad2 = 0;

// Agregar evento de clic al botón
agregarButton2.addEventListener('click', () => {
    cantidad2++;
    cantidadElement2.textContent = cantidad2;
});

const cantidadElement3 = document.getElementById('cantidad3');
const agregarButton3 = document.getElementById('agregar3');

let cantidad3 = 0;

// Agregar evento de clic al botón
agregarButton3.addEventListener('click', () => {
    cantidad3++;
    cantidadElement3.textContent = cantidad3;
});


AOS.init({
    duration: 2000, // Duración de las animaciones en milisegundos
    offset: 150,  // Píxeles desde la parte superior de la ventana hasta que se active la animación
    easing: 'ease-in-out', // Tipo de curva de animación
    once: true // Activa la animación solo una vez por elemento
  })


//VentanaEmergente de Bienvenida//

document.addEventListener("DOMContentLoaded", function () {
    const mostrarMensajeBtn = document.getElementById("mostrarMensaje");
    const ventanaEmergente = document.getElementById("ventanaEmergente");
    const fondoOscuro = document.getElementById("fondoOscuro");
    const cerrarVentanaBtn = document.getElementById("cerrarVentana");

    mostrarMensajeBtn.addEventListener("click", function () {
        ventanaEmergente.style.display = "block";
        fondoOscuro.style.display = "block";
    });

    cerrarVentanaBtn.addEventListener("click", function () {
        ventanaEmergente.style.display = "none";
        fondoOscuro.style.display = "none";
    });
});