package main

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
)

func main() {
	// Cadena de conexión: Ajusta host, usuario, contraseña y nombre de la base de datos
	connStr := "host=localhost user=postgres password=12345 dbname=tienda sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println("Error al abrir la conexión:", err)
		return
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		fmt.Println("Error de conexión:", err)
		return
	}
	fmt.Println("Conexión exitosa a PostgreSQL")
}
