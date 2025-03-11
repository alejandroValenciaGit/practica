<?php
$registros = [
    [1, "Ana", 25],
    [2, "Luis", 30],
    [3, "Carlos", 22]
];

function consultar($nombre) {
    global $registros;
    $resultado = [];
    foreach ($registros as $registro) {
        if (strtolower($registro[1]) === strtolower($nombre)) {
            $resultado[] = $registro;
        }
    }
    return $resultado;
}

function ordenar_por_clave($indice) {
    global $registros;
    $registros_ordenados = $registros;
    usort($registros_ordenados, function($a, $b) use ($indice) {
        return $a[$indice] <=> $b[$indice];
    });
    return $registros_ordenados;
}

function anexar_registro() {
    global $registros;
    echo "Ingrese el ID: ";
    $id_nuevo = (int)trim(fgets(STDIN));
    echo "Ingrese el nombre: ";
    $nombre_nuevo = trim(fgets(STDIN));
    echo "Ingrese la edad: ";
    $edad_nueva = (int)trim(fgets(STDIN));
    $registros[] = [$id_nuevo, $nombre_nuevo, $edad_nueva];
    echo "Registro agregado exitosamente.\n";
}

function filtrar_por_edad($edad_minima) {
    global $registros;
    $resultado = [];
    foreach ($registros as $registro) {
        if ($registro[2] >= $edad_minima) {
            $resultado[] = $registro;
        }
    }
    return $resultado;
}

function menu() {
    global $registros;
    while (true) {
        echo "\n--- MENU ---\n";
        echo "1. Consultar por nombre\n";
        echo "2. Ordenar registros\n";
        echo "3. Agregar nuevo registro\n";
        echo "4. Filtrar por edad\n";
        echo "5. Mostrar registros\n";
        echo "6. Salir\n";
        echo "Seleccione una opción: ";
        $opcion = trim(fgets(STDIN));
        if ($opcion === "1") {
            echo "Ingrese el nombre a consultar: ";
            $nombre = trim(fgets(STDIN));
            print_r(consultar($nombre));
        } elseif ($opcion === "2") {
            echo "Ingrese la clave de ordenamiento (id, nombre, edad): ";
            $clave = strtolower(trim(fgets(STDIN)));
            $indices = ["id" => 0, "nombre" => 1, "edad" => 2];
            if (isset($indices[$clave])) {
                print_r(ordenar_por_clave($indices[$clave]));
            } else {
                echo "Clave no válida. Intente nuevamente.\n";
            }
        } elseif ($opcion === "3") {
            anexar_registro();
        } elseif ($opcion === "4") {
            echo "Ingrese la edad mínima para filtrar: ";
            $edad = (int)trim(fgets(STDIN));
            print_r(filtrar_por_edad($edad));
        } elseif ($opcion === "5") {
            print_r($registros);
        } elseif ($opcion === "6") {
            echo "Saliendo del programa.\n";
            break;
        } else {
            echo "Opción no válida. Intente de nuevo.\n";
        }
    }
}

menu();
?>
