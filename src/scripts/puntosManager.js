export function manejarPuntosWorker(puntosWorker, sonidoPuntos, puntos, preguntas, nivel, problemaWorker, timerWorker) {
    puntosWorker.onmessage = (e) => {
        if (e.data.correcto) {
            sonidoPuntos.play();
            puntos += 10;
            document.getElementById('puntos').textContent = puntos;
            timerWorker.postMessage({accion: 'sumarTiempo', tiempoExtra: 10});
        }
        preguntas++;
        if (preguntas % 10 === 0) nivel++;
        problemaWorker.postMessage({nivel});
    };
}