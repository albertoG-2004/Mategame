onmessage = function(e) {
    let {nivel} = e.data;
    let num1, num2, operador;

    if (nivel === 1) {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        operador = Math.random() > 0.5 ? '+' : '-';
    } else if (nivel === 2) {
        num1 = Math.floor(Math.random() * 20);
        num2 = Math.floor(Math.random() * 20);
        operador = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        
        if (operador === '/') {
            num2 = Math.floor(Math.random() * 9) + 1;
            num1 = num2 * Math.floor(Math.random() * 10);
        }

    } else {
        num1 = Math.floor(Math.random() * 30);
        num2 = Math.floor(Math.random() * 30);
        operador = ['+', '-', '*', '/', '^', '√'][Math.floor(Math.random() * 6)];
        
        if (operador === '/') {
            num2 = Math.floor(Math.random() * 9) + 1;
            num1 = num2 * Math.floor(Math.random() * 10);
        }
        if (operador === '^') {
            num2 = Math.floor(Math.random() * 3) + 2;
        }
        if (operador === '√') {
            num1 = Math.pow(num2, 2);
        }
    }

    let problema = `${num1} ${operador} ${num2} =`;
    postMessage({problema});
};