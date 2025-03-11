const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Operación simple
let a = 5;
let b = 6;
let c = a + b;
console.log(c);

rl.question("Escriba un numero: ", (num1Str) => {
    const num1 = parseInt(num1Str);
    rl.question("Escriba otro numero: ", (num2Str) => {
    const num2 = parseInt(num2Str);
    rl.question("Escribe la operacion: ", (op) => {
        const suma = num1 + num2;
        const resta = num1 - num2;
        const multiplicacion = num1 * num2;
        const division = num1 / num2;
        const potencia = Math.pow(num1, num2);

        console.log('El total de la suma es: ', suma);
        console.log('El resultado de la resta es: ', resta);
        console.log('El producto de la multiplicacion es: ', multiplicacion);
        console.log('El cociente de la division es: ', division);
        console.log('La potencia es: ', potencia);  

        if (op === '+') {
        console.log('El total de la suma es: ', suma);
        } else if (op === '-') {
        console.log('El resultado de la resta es: ', resta);
        } else if (op === '*') {
        console.log('El producto de la multiplicacion es: ', multiplicacion);
        } else if (op === '/') {
        console.log('El cociente de la division es: ', division);
        } else if (op === '**') {
        console.log("La potencia es: ", potencia);
        } else {
        console.log("Asigne valores validos");
        }
        rl.close();
    });
    });
});
