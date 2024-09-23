export function manejarProblemaWorker(problemaWorker, nivel) {
    problemaWorker.onmessage = (e) => {
        document.getElementById('problema').textContent = e.data.problema;
    };
    problemaWorker.postMessage({nivel});
}