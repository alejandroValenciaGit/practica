<?php
$host = "localhost";
$user = "root";
$password = "";
// $dbname = "tienda"; // Descomenta y ajusta si deseas conectar a una base de datos específica

$conn = new mysqli($host, $user, $password);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo "Conexión exitosa\n";
$conn->close();
?>
