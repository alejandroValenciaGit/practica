import mysql.connector

    # Intentamos establecer la conexion de base de datos
conn = mysql.connector.connect(
    host = "localhost",     # Direccion del servidor de la base de datos
    user = "root",          # Usuario de MySQL
    password = "",     # Contraseña del usuario MySQL (debe configurarse si tienes una)
    #database = "tienda", # Descomentar si se quiere conectar a una base de datos especifica.
)
    # Si la conexion se establece correctamente, imprimimos un mensaje de exito
print(conn)
print("Conexion exitosa")