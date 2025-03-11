<?php
function ohm() {
    while (true) {
        echo "Calculadora de la Ley de Ohm\n";
        echo "Selecciona la variable a calcular:\n";
        echo "1. Voltaje (V)\n";
        echo "2. Corriente (I)\n";
        echo "3. Resistencia (R)\n";
        echo "4. Salir\n";
        echo "Ingresa tu opción (1, 2, 3 o 4): ";
        $opcion = trim(fgets(STDIN));

        if ($opcion === "1") {
            echo "Ingresa la corriente (I) en amperios: ";
            $I = floatval(trim(fgets(STDIN)));
            echo "Ingresa la resistencia (R) en ohmios: ";
            $R = floatval(trim(fgets(STDIN)));
            $V = $I * $R;
            echo "El voltaje (V) es: " . $V . " voltios\n";
        } elseif ($opcion === "2") {
            echo "Ingresa el voltaje (V) en voltios: ";
            $V = floatval(trim(fgets(STDIN)));
            echo "Ingresa la resistencia (R) en ohmios: ";
            $R = floatval(trim(fgets(STDIN)));
            if ($R != 0) {
                $I = $V / $R;
                echo "La corriente (I) es: " . $I . " amperios\n";
            } else {
                echo "La resistencia no puede ser 0.\n";
            }
        } elseif ($opcion === "3") {
            echo "Ingresa el voltaje (V) en voltios: ";
            $V = floatval(trim(fgets(STDIN)));
            echo "Ingresa la corriente (I) en amperios: ";
            $I = floatval(trim(fgets(STDIN)));
            if ($I != 0) {
                $R = $V / $I;
                echo "La resistencia (R) es: " . $R . " ohmios\n";
            } else {
                echo "La corriente no puede ser 0.\n";
            }
        } elseif ($opcion === "4") {
            echo "Gracias por usar el programa.\n";
            break;
        } else {
            echo "Opción inválida.\n";
        }
    }
}

ohm();
?>
