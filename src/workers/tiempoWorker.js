let tiempo = 0;
let intervalo;

onmessage = function(e) {
    if (e.data.accion === 'iniciar') {
        tiempo = e.data.tiempo;
        intervalo = setInterval(() => {
            tiempo--;
            postMessage({tiempo});
            if (tiempo <= 0) {
                clearInterval(intervalo);
            }
        }, 1000);
    } else if (e.data.accion === 'sumarTiempo') {
        tiempo += e.data.tiempoExtra;
    }
};