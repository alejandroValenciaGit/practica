import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexionPost {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/"; // Ajusta la URL y el nombre de la base de datos si es necesario
        String user = "postgres";
        String password = "12345";
        
        try {
            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Conexion exitosa");
            conn.close();
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
