require 'pg'

begin
  conn = PG.connect(
    host: "localhost",
    user: "postgres",
    password: "12345",
    dbname: "tienda"  # Ajusta el nombre de la base de datos según sea necesario
  )
  puts "Conexión exitosa a PostgreSQL"
  conn.close
rescue PG::Error => e
  puts "Error de conexión: #{e.message}"
end
