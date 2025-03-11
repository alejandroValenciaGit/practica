const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let registros = [
    [1, "Ana", 25],
    [2, "Luis", 30],
    [3, "Carlos", 22]
];

function consultar(nombre) {
    return registros.filter(registro => registro[1].toLowerCase() === nombre.toLowerCase());
}

function ordenar_por_clave(indice) {
    return [...registros].sort((a, b) => a[indice] - b[indice]);
}

function anexar_registro(callback) {
    rl.question("Ingrese el ID: ", (idStr) => {
    const id_nuevo = parseInt(idStr);
    rl.question("Ingrese el nombre: ", (nombre_nuevo) => {
        rl.question("Ingrese la edad: ", (edadStr) => {
        const edad_nueva = parseInt(edadStr);
        registros.push([id_nuevo, nombre_nuevo, edad_nueva]);
        console.log("Registro agregado exitosamente.");
        callback();
        });
    });
    });
}

function filtrar_por_edad(edad_minima) {
    return registros.filter(registro => registro[2] >= edad_minima);
}

function menu() {
    console.log("\n--- MENU ---");
    console.log("1. Consultar por nombre");
    console.log("2. Ordenar registros");
    console.log("3. Agregar nuevo registro");
    console.log("4. Filtrar por edad");
    console.log("5. Mostrar registros");
    console.log("6. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
    if (opcion === "1") {
        rl.question("Ingrese el nombre a consultar: ", (nombre) => {
        console.log("Resultados:", consultar(nombre));
        menu();
        });
    } else if (opcion === "2") {
        rl.question("Ingrese la clave de ordenamiento (id, nombre, edad): ", (clave) => {
        clave = clave.toLowerCase();
        const indices = { "id": 0, "nombre": 1, "edad": 2 };
        if (indices.hasOwnProperty(clave)) {
            console.log("Registros ordenados:", ordenar_por_clave(indices[clave]));
        } else {
            console.log("Clave no válida. Intente nuevamente.");
        }
        menu();
        });
    } else if (opcion === "3") {
        anexar_registro(menu);
    } else if (opcion === "4") {
        rl.question("Ingrese la edad mínima para filtrar: ", (edadStr) => {
        const edad = parseInt(edadStr);
        console.log("Registros filtrados:", filtrar_por_edad(edad));
        menu();
        });
    } else if (opcion === "5") {
        console.log("Lista completa de registros:", registros);
        menu();
    } else if (opcion === "6") {
        console.log("Saliendo del programa.");
        rl.close();
    } else {
        console.log("Opción no válida. Intente de nuevo.");
        menu();
    }
    });
}

menu();
