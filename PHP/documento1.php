<?php
// Operación simple
$a = 5;
$b = 6;
$c = $a + $b;
echo $c . "\n";

// Solicitar dos números y una operación
echo "Escriba un numero: ";
$num1 = (int) trim(fgets(STDIN));
echo "Escriba otro numero: ";
$num2 = (int) trim(fgets(STDIN));
echo "Escribe la operacion: ";
$op = trim(fgets(STDIN));

$suma = $num1 + $num2;
$resta = $num1 - $num2;
$multiplicacion = $num1 * $num2;
$division = $num1 / $num2;
$potencia = pow($num1, $num2);

echo "El total de la suma es: " . $suma . "\n";
echo "El resultado de la resta es: " . $resta . "\n";
echo "El producto de la multiplicacion es: " . $multiplicacion . "\n";
echo "El cociente de la division es: " . $division . "\n";
echo "La potencia es: " . $potencia . "\n";

if ($op === '+') {
    echo "El total de la suma es: " . $suma . "\n";
} elseif ($op === '-') {
    echo "El resultado de la resta es: " . $resta . "\n";
} elseif ($op === '*') {
    echo "El producto de la multiplicacion es: " . $multiplicacion . "\n";
} elseif ($op === '/') {
    echo "El cociente de la division es: " . $division . "\n";
} elseif ($op === '**') {
    echo "La potencia es: " . $potencia . "\n";
} else {
    echo "Asigne valores validos\n";
}
?>
