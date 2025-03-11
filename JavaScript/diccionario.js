const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let registros = {
    1: { nombre: "Ana", edad: 25 },
    2: { nombre: "Luis", edad: 30 },
    3: { nombre: "Carlos", edad: 22 }
};

function consultar(nombre) {
    const resultado = {};
    for (let id in registros) {
        if (registros[id].nombre.toLowerCase() === nombre.toLowerCase()) {
        resultado[id] = registros[id];
    }
}
return resultado;
}

function ordenar_por_clave(clave) {
const entries = Object.entries(registros);
entries.sort((a, b) => {
    if(a[1][clave] < b[1][clave]) return -1;
    if(a[1][clave] > b[1][clave]) return 1;
    return 0;
});
return entries;
}

function anexar_registro(callback) {
rl.question("Ingrese el ID: ", (idStr) => {
    const id_nuevo = parseInt(idStr);
    rl.question("Ingrese el nombre: ", (nombre_nuevo) => {
    rl.question("Ingrese la edad: ", (edadStr) => {
        const edad_nueva = parseInt(edadStr);
        registros[id_nuevo] = { nombre: nombre_nuevo, edad: edad_nueva };
        console.log("Registro agregado exitosamente.");
        callback();
        });
    });
    });
}

function filtrar_por_edad(edad_minima) {
    const resultado = {};
    for (let id in registros) {
    if (registros[id].edad >= edad_minima) {
        resultado[id] = registros[id];
    }
    }
    return resultado;
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
    switch (opcion) {
        case "1":
        rl.question("Ingrese el nombre a consultar: ", (nombre) => {
            console.log("Resultados:", consultar(nombre));
            menu();
        });
        break;
        case "2":
        rl.question("Ingrese la clave de ordenamiento (nombre, edad): ", (clave) => {
            console.log("Registros ordenados:", ordenar_por_clave(clave));
            menu();
        });
        break;
        case "3":
        anexar_registro(menu);
        break;
        case "4":
        rl.question("Ingrese la edad mínima para filtrar: ", (edadStr) => {
            const edad = parseInt(edadStr);
            console.log("Registros filtrados:", filtrar_por_edad(edad));
            menu();
        });
        break;
        case "5":
        console.log("Lista completa de registros:", registros);
        menu();
        break;
        case "6":
        console.log("Saliendo del programa.");
        rl.close();
        break;
        default:
        console.log("Opción no válida. Intente de nuevo.");
        menu();
    }
    });
}

menu();
