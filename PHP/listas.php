<?php
$mi_lista = [34, 12, 465, 67, 23, 89, 5, 90, 56, 78];

function operar_listas($lista) {
    $lista_ordenada = $lista;
    sort($lista_ordenada);
    echo "Lista ordenada: ";
    print_r($lista_ordenada);

    $sub_lista = array_slice($lista_ordenada, 2, 5);
    echo "Sublista (índices 2 al 6): ";
    print_r($sub_lista);

    $nueva_lista = array_map(function($x) { return $x * $x; }, $sub_lista);
    echo "Nueva lista con elementos elevados al cuadrado: ";
    print_r($nueva_lista);

    $lista_modificada = $lista;
    $lista_modificada[2] = 100;
    echo "Lista modificada: ";
    print_r($lista_modificada);

    return [$lista_ordenada, $sub_lista, $nueva_lista, $lista_modificada];
}

list($ordenada, $sub, $nueva, $modificada) = operar_listas($mi_lista);

$animales = ["perro", "gato", "foca", "leon", "tiburon", "colibri"];
$animales1 = $animales;
print_r($animales1);

$a = "Abeja";
$b = "Mosca";
$c = "Libelula";
$miLista = [$a, $b, $c];
print_r($miLista);
?>
