require 'mysql2'

begin
  client = Mysql2::Client.new(
    host: "localhost",
    username: "root",
    password: "",
    # database: "tienda"  # Descomenta y ajusta si deseas conectar a una base de datos específica
  )
  puts "Conexión exitosa a MySQL"
rescue Mysql2::Error => e
  puts "Error de conexión: #{e.message}"
end
