const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  //, database: 'tienda' // Descomenta y ajusta si deseas conectar a una base de datos específica
});

connection.connect((err) => {
    if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
    }
    console.log('Conexión exitosa');
    connection.end();
});
