let usuarioNombre;
let edadUsuario;
let resultadoSimulacion;

const maxEdad = 100;
const minEdad = 18;

let resultadosPosibles = ['Éxito', 'Fracaso', 'Pendiente'];

// Referencias del DOM
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const iniciarBtn = document.getElementById('iniciar');
const resultadoDiv = document.getElementById('resultado');
const resultadoSimulacionElem = document.getElementById('resultadoSimulacion');
const guardarResultadoBtn = document.getElementById('guardarResultado');
const reiniciarBtn = document.getElementById('reiniciar');
const introDiv = document.getElementById('intro');

// Función para pedir nombre
function pedirNombre() {
    usuarioNombre = nombreInput.value.trim();
    if (usuarioNombre) {
        console.log("Hola, " + usuarioNombre + "!");
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

// Función para pedir edad
function pedirEdad() {
    edadUsuario = parseInt(edadInput.value);
    if (isNaN(edadUsuario) || edadUsuario < minEdad || edadUsuario > maxEdad) {
        alert("Edad no válida. Debes tener entre " + minEdad + " y " + maxEdad + " años.");
        return false;
    } else {
        console.log("Edad aceptada.");
        return true;
    }
}

// Función para realizar simulación
function realizarSimulacion() {
    let resultado = resultadosPosibles[Math.floor(Math.random() * resultadosPosibles.length)];
    resultadoSimulacion = resultado;
    resultadoSimulacionElem.textContent = "El resultado de tu simulación es: " + resultadoSimulacion;
    resultadoDiv.style.display = 'block';
    introDiv.style.display = 'none';
}

// Función para guardar resultado en LocalStorage
function guardarResultado() {
    const simulacionData = {
        nombre: usuarioNombre,
        edad: edadUsuario,
        resultado: resultadoSimulacion
    };
    localStorage.setItem('simulacionData', JSON.stringify(simulacionData));
    alert("Resultado guardado!");
}

// Función para reiniciar simulador
function reiniciarSimulador() {
    nombreInput.value = '';
    edadInput.value = '';
    resultadoSimulacionElem.textContent = '';
    resultadoDiv.style.display = 'none';
    introDiv.style.display = 'block';
}

// Evento para iniciar la simulación
iniciarBtn.addEventListener('click', () => {
    pedirNombre();
    if (pedirEdad()) {
        realizarSimulacion();
    }
});

// Evento para guardar el resultado
guardarResultadoBtn.addEventListener('click', guardarResultado);

// Evento para reiniciar el simulador
reiniciarBtn.addEventListener('click', reiniciarSimulador);

// Comprobar si hay datos guardados en LocalStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const simulacionData = JSON.parse(localStorage.getItem('simulacionData'));
    if (simulacionData) {
        alert(`¡Bienvenido de nuevo, ${simulacionData.nombre}! Tu resultado guardado es: ${simulacionData.resultado}`);
    }
});