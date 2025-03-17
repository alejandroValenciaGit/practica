<?php
$conn = pg_connect("host=localhost user=postgres password=12345");
// Puedes agregar database=tienda y port=5432 si es necesario
if (!$conn) {
    die("Conexión fallida");
}
echo "Conexión exitosa\n";
pg_close($conn);
?>
