<?php
function tabla_verdad() {
    echo "Tabla de la verdad para la expresión (A AND B) OR (NOT A)\n";
    echo "A\tB\tResultado\n";
    $valores = [false, true];
    foreach ($valores as $A) {
        foreach ($valores as $B) {
            $resultado = ($A && $B) || (!$A);
            // Convertir booleanos a cadenas para mostrar
            $A_str = $A ? 'True' : 'False';
            $B_str = $B ? 'True' : 'False';
            $resultado_str = $resultado ? 'True' : 'False';
            echo "$A_str\t$B_str\t$resultado_str\n";
        }
    }
}

tabla_verdad();
?>
