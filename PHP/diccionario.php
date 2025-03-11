<?php
$registros = [
    1 => ["nombre" => "Ana", "edad" => 25],
    2 => ["nombre" => "Luis", "edad" => 30],
    3 => ["nombre" => "Carlos", "edad" => 22]
];

function consultar($nombre) {
    global $registros;
    $resultado = [];
    foreach ($registros as $id => $datos) {
        if (strtolower($datos["nombre"]) === strtolower($nombre)) {
            $resultado[$id] = $datos;
        }
    }
    return $resultado;
}

function ordenar_por_clave($clave) {
    global $registros;
    $items = $registros;
    uasort($items, function($a, $b) use ($clave) {
        return $a[$clave] <=> $b[$clave];
    });
    return $items;
}

function anexar_registro() {
    global $registros;
    echo "Ingrese el ID: ";
    $id_nuevo = (int)trim(fgets(STDIN));
    echo "Ingrese el nombre: ";
    $nombre_nuevo = trim(fgets(STDIN));
    echo "Ingrese la edad: ";
    $edad_nueva = (int)trim(fgets(STDIN));
    $registros[$id_nuevo] = ["nombre" => $nombre_nuevo, "edad" => $edad_nueva];
    echo "Registro agregado exitosamente.\n";
}

function filtrar_por_edad($edad_minima) {
    global $registros;
    $resultado = [];
    foreach ($registros as $id => $datos) {
        if ($datos["edad"] >= $edad_minima) {
            $resultado[$id] = $datos;
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
            echo "Ingrese la clave de ordenamiento (nombre, edad): ";
            $clave = trim(fgets(STDIN));
            print_r(ordenar_por_clave($clave));
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
