<?php
// Solicita un número al usuario
$numero = (int)readline("Ingrese un número: ");
if ($numero % 2 == 0) {
    echo "El número $numero es par.\n";
} else {
    echo "El número $numero es impar.\n";
}
?>
