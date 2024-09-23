export function manejarTimerWorker(timerWorker, sonidoTiempo, alertaTiempo, tiempo) {
    timerWorker.onmessage = (e) => {
        if (e.data.tiempo <= 0) {
            sonidoTiempo.play();
            alertaTiempo.style.display = 'block';
        } else {
            tiempo = e.data.tiempo;
            document.getElementById('tiempo').textContent = tiempo;
        }
    };
}