const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cajero() {
    let saldo = 1000.0;

function menu() {
    console.log("\n--- Cajero Automático ---");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");
    rl.question("Elige una opción: ", (opcion) => {
        if (opcion === "1") {
        console.log("Tu saldo actual es: $", saldo);
        menu();
        } else if (opcion === "2") {
        rl.question("Ingresa la cantidad a retirar: $", (cantidadStr) => {
            let cantidad = parseFloat(cantidadStr);
            if (cantidad > saldo) {
            console.log("Fondos insuficientes.");
            } else {
            saldo -= cantidad;
            console.log("Retiro exitoso. Tu nuevo saldo es: $", saldo);
            }
            menu();
        });
        } else if (opcion === "3") {
        rl.question("Ingresa la cantidad a depositar: $", (cantidadStr) => {
            let cantidad = parseFloat(cantidadStr);
            saldo += cantidad;
            console.log("Depósito exitoso. Tu nuevo saldo es: $", saldo);
            menu();
        });
        } else if (opcion === "4") {
        console.log("Gracias por usar el cajero. ¡Hasta luego!");
        rl.close();
        } else {
        console.log("Opción inválida, intenta de nuevo.");
        menu();
        }
    });
    }

    menu();
}

cajero();
