import psycopg2

    # Intentamos establecer la conexion de base de datos
conn = psycopg2.connect(
    host = "localhost",     # Direccion del servidor de la base de datos
    user = "postgres",          # Usuario de MySQL
    password = "12345",     # Contraseña del usuario MySQL (debe configurarse si tienes una)
    #database = "tienda", # Descomentar si se quiere conectar a una base de datos especifica.
    #port=5432
)
    # Si la conexion se establece correctamente, imprimimos un mensaje de exito
print(conn)
print("Conexion exitosa")