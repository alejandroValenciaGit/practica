const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

    readline.question("\nIngrese un número: ", (numStr) => {
    const numero = parseInt(numStr);
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
    readline.close();
});
