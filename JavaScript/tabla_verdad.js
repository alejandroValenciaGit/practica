function tablaVerdad() {
    console.log("Tabla de la verdad para la expresión (A AND B) OR (NOT A)");
    console.log("A\tB\tResultado");
    const valores = [false, true];
    for (let A of valores) {
        for (let B of valores) {
        const resultado = (A && B) || (!A);
        console.log(A + "\t" + B + "\t" + resultado);
        }
    }
}

tablaVerdad();
