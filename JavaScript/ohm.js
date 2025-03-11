const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ohm() {
    function menu() {
    console.log("Calculadora de la Ley de Ohm");
    console.log("Selecciona la variable a calcular:");
    console.log("1. Voltaje (V)");
    console.log("2. Corriente (I)");
    console.log("3. Resistencia (R)");
    console.log("4. Salir");
    rl.question("Ingresa tu opción (1, 2, 3 o 4): ", (opcion) => {
        if (opcion === "1") {
        rl.question("Ingresa la corriente (I) en amperios: ", (Istr) => {
            const I = parseFloat(Istr);
            rl.question("Ingresa la resistencia (R) en ohmios: ", (Rstr) => {
            const R = parseFloat(Rstr);
            const V = I * R;
            console.log("El voltaje (V) es:", V, "voltios");
            menu();
            });
        });
        } else if (opcion === "2") {
        rl.question("Ingresa el voltaje (V) en voltios: ", (Vstr) => {
            const V = parseFloat(Vstr);
            rl.question("Ingresa la resistencia (R) en ohmios: ", (Rstr) => {
            const R = parseFloat(Rstr);
            if (R !== 0) {
                const I = V / R;
                console.log("La corriente (I) es:", I, "amperios");
            } else {
                console.log("La resistencia no puede ser 0.");
            }
            menu();
            });
        });
        } else if (opcion === "3") {
        rl.question("Ingresa el voltaje (V) en voltios: ", (Vstr) => {
            const V = parseFloat(Vstr);
            rl.question("Ingresa la corriente (I) en amperios: ", (Istr) => {
            const I = parseFloat(Istr);
            if (I !== 0) {
                const R = V / I;
                console.log("La resistencia (R) es:", R, "ohmios");
            } else {
                console.log("La corriente no puede ser 0.");
            }
            menu();
            });
        });
        } else if (opcion === "4") {
        console.log("Gracias por usar el programa.");
        rl.close();
        } else {
        console.log("Opción inválida.");
        menu();
        }
    });
    }
    menu();
}

ohm();
