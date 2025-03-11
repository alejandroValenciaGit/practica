<?php
function mostrar() {
    echo "Hola mundo funciones\n";
}
mostrar();

function suma($a, $b) {
    return $a + $b;
}

function resta($a, $b) {
    return $a - $b;
}

function multiplicacion($a, $b) {
    return $a * $b;
}

function division($a, $b) {
    if ($b == 0) {
        return "Error; No se puede dividir por cero.";
    }
    return $a / $b;
}

function exponente($a, $b) {
    return pow($a, $b);
}

function calculadora() {
    while (true) {
        echo "\n--- Calculadora en PHP ----\n";
        echo "1. Suma\n";
        echo "2. Resta\n";
        echo "3. Multiplicación\n";
        echo "4. División\n";
        echo "5. Exponente\n";
        echo "6. Salir\n";
        echo "Seleccione una opción (1-6): ";
        $opcion = trim(fgets(STDIN));

        if ($opcion === "6") {
            echo "Saliendo de la calculadora...\n";
            break;
        }
        if (!in_array($opcion, ["1", "2", "3", "4", "5"])) {
            echo "Opción no válida. Intente de nuevo.\n";
            continue;
        }
        echo "Ingrese el primer número: ";
        $num1 = floatval(trim(fgets(STDIN)));
        echo "Ingrese el segundo número: ";
        $num2 = floatval(trim(fgets(STDIN)));

        $operaciones = [
            "1" => "suma",
            "2" => "resta",
            "3" => "multiplicacion",
            "4" => "division",
            "5" => "exponente"
        ];
        $func = $operaciones[$opcion];
        $resultado = $func($num1, $num2);
        echo "Resultado: $resultado\n";
    }
}

calculadora();
?>
