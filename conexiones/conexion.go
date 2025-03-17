package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// DSN: usuario:contraseña@tcp(host:puerto)/nombre_basedatos
	dsn := "root:@tcp(127.0.0.1:3306)/tienda" // Ajusta según tus datos
	db, err := sql.Open("mysql", dsn)
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
	fmt.Println("Conexión exitosa a MySQL")
}
