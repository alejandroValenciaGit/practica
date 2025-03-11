const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrar() {
    console.log("Hola mundo funciones");
}
mostrar();

function suma(a, b) { return a + b; }
function resta(a, b) { return a - b; }
function multiplicacion(a, b) { return a * b; }
function division(a, b) { 
    if (b === 0) return "Error; No se puede dividir por cero.";
    return a / b; 
}
function exponente(a, b) { return Math.pow(a, b); }

function calculadora() {
    console.log("\n--- Calculadora en JavaScript ----");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Exponente");
    console.log("6. Salir");
    rl.question("Seleccione una opción (1-6): ", (opcion) => {
    if (opcion === "6") {
        console.log("Saliendo de la calculadora...");
        rl.close();
        return;
    }
    if (!["1", "2", "3", "4", "5"].includes(opcion)) {
        console.log("Opción no válida. Intente de nuevo.");
        calculadora();
        return;
    }
    rl.question("Ingrese el primer número: ", (num1Str) => {
        rl.question("Ingrese el segundo número: ", (num2Str) => {
        const num1 = parseFloat(num1Str);
        const num2 = parseFloat(num2Str);
        const operaciones = {
            "1": suma,
            "2": resta,
            "3": multiplicacion,
            "4": division,
            "5": exponente
        };
        const resultado = operaciones[opcion](num1, num2);
        console.log("Resultado:", resultado);
        calculadora();
        });
    });
    });
}

calculadora();
