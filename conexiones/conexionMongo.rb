require 'mongo'
include Mongo

begin
  # Conecta al cliente de MongoDB y selecciona la base de datos "ecommerce2996948"
  client = Mongo::Client.new("mongodb://localhost:27017/ecommerce2996948")
  puts "Conexión exitosa a MongoDB"
rescue => e
  puts "Error de conexión: #{e.message}"
end
