import { manejarProblemaWorker } from './problemaManager.js';
import { manejarPuntosWorker } from './puntosManager.js';
import { manejarTimerWorker } from './timerManager.js';

let puntos = 0;
let preguntas = 0;
let nivel = 1;
let tiempo = 15;

if (typeof (Worker) !== "undefined") {
    const problemaWorker = new Worker('../workers/problemaWorker.js');
    const puntosWorker = new Worker('../workers/puntosWorker.js');
    const timerWorker = new Worker('../workers/tiempoWorker.js');

    const sonidoTiempo = document.getElementById('sonidoTiempo');
    const alertaTiempo = document.getElementById('alertaTiempo');
    const btnReiniciar = document.getElementById('btnReiniciar');

    manejarProblemaWorker(problemaWorker, nivel);
    manejarPuntosWorker(puntosWorker, sonidoPuntos, puntos, preguntas, nivel, problemaWorker, timerWorker);
    manejarTimerWorker(timerWorker, sonidoTiempo, alertaTiempo, tiempo);

    document.getElementById('btnResponder').addEventListener('click', () => {
        let respuestaUsuario = parseFloat(document.getElementById('respuesta').value);
        let problema = document.getElementById('problema').textContent;
        puntosWorker.postMessage({respuestaUsuario, problema});
        document.getElementById('respuesta').value = '';
    });

    btnReiniciar.addEventListener('click', () => {
        location.reload();
    });

    problemaWorker.postMessage({nivel});
    timerWorker.postMessage({accion: 'iniciar', tiempo});
} else {
    console.log("Tu navegador no soporta Web Workers");
    alert("Tu navegador no soporta Web Workers");
}