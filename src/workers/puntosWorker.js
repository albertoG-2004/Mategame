onmessage = function(e) {
    let {respuestaUsuario, problema} = e.data;

    let partes = problema.split(' ');
    let num1 = parseFloat(partes[0]);
    let operador = partes[1];
    let num2 = parseFloat(partes[2]);
    let respuestaCorrecta;

    switch (operador) {
        case '+': respuestaCorrecta = num1 + num2; break;
        case '-': respuestaCorrecta = num1 - num2; break;
        case '*': respuestaCorrecta = num1 * num2; break;
        case '/': respuestaCorrecta = Math.floor(num1 / num2); break;
        case '^': respuestaCorrecta = Math.pow(num1, num2); break;
        case '√': respuestaCorrecta = Math.sqrt(num1); break;
    }

    let correcto = respuestaUsuario === respuestaCorrecta;
    postMessage({correcto});
    
    if (correcto) {
        postMessage({accion: 'sumarTiempo', tiempoExtra: 5});
    }
};