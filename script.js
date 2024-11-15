// Variables para almacenar datos del usuario
let usuarioNombre;
let edadUsuario;
let resultadoSimulacion;

// Constantes para valores fijos
const maxEdad = 100; // Edad máxima
const minEdad = 18;  // Edad mínima para participar en el simulador

// Array de resultados posibles
let resultadosPosibles = ['Éxito', 'Fracaso', 'Pendiente'];

// Función para pedir el nombre del usuario
function pedirNombre() {
    usuarioNombre = prompt("¿Cuál es tu nombre?");
    console.log("Hola, " + usuarioNombre + "!");
}

// Función para pedir la edad del usuario y verificar si es válida
function pedirEdad() {
    edadUsuario = parseInt(prompt("¿Cuántos años tienes?"));
    if (isNaN(edadUsuario) || edadUsuario < minEdad || edadUsuario > maxEdad) {
        console.log("Edad no válida. Debes tener entre " + minEdad + " y " + maxEdad + " años.");
        return false;  // Indica que la edad no es válida
    } else {
        console.log("Edad aceptada.");
        return true;  // Edad válida
    }
}

// Función que simula un resultado aleatorio
function realizarSimulacion() {
    let resultado = resultadosPosibles[Math.floor(Math.random() * resultadosPosibles.length)];
    resultadoSimulacion = resultado;
    console.log("El resultado de tu simulación es: " + resultadoSimulacion);
}

// Función principal que usa las otras funciones
function iniciarSimulador() {
    console.log("Simulador iniciado...");

    // Pedir el nombre del usuario
    pedirNombre();

    // Pedir la edad y verificar que sea válida
    let edadValida = false;
    while (!edadValida) {
        edadValida = pedirEdad();
    }

    // Preguntar si quiere realizar la simulación
    let continuarSimulacion = confirm("¿Quieres realizar la simulación?");
    if (continuarSimulacion) {
        realizarSimulacion();
    } else {
        console.log("Simulación cancelada.");
    }
}

// Llamamos a la función de inicio al cargar el script
iniciarSimulador();
