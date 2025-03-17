const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: '12345'
  //, database: 'tienda', port: 5432 // Descomenta y ajusta si es necesario
});

client.connect()
    .then(() => {
        console.log("Conexión exitosa");
        return client.end();
    })
    .catch(err => console.error(err));
