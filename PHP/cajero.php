<?php
function cajero() {
    $saldo = 1000.0; // Saldo inicial
    while (true) {
        echo "\n--- Cajero Automático ---\n";
        echo "1. Consultar saldo\n";
        echo "2. Retirar dinero\n";
        echo "3. Depositar dinero\n";
        echo "4. Salir\n";
        echo "Elige una opción: ";
        $opcion = trim(fgets(STDIN));

        if ($opcion === "1") {
            echo "Tu saldo actual es: $" . $saldo . "\n";
        } elseif ($opcion === "2") {
            echo "Ingresa la cantidad a retirar: $";
            $cantidad = floatval(trim(fgets(STDIN)));
            if ($cantidad > $saldo) {
                echo "Fondos insuficientes.\n";
            } else {
                $saldo -= $cantidad;
                echo "Retiro exitoso. Tu nuevo saldo es: $" . $saldo . "\n";
            }
        } elseif ($opcion === "3") {
            echo "Ingresa la cantidad a depositar: $";
            $cantidad = floatval(trim(fgets(STDIN)));
            $saldo += $cantidad;
            echo "Depósito exitoso. Tu nuevo saldo es: $" . $saldo . "\n";
        } elseif ($opcion === "4") {
            echo "Gracias por usar el cajero. ¡Hasta luego!\n";
            break;
        } else {
            echo "Opción inválida, intenta de nuevo.\n";
        }
    }
}

cajero();
?>

