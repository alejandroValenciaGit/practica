import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

public class conexionMongo {
    public static void main(String[] args) {
        try {
            MongoClientURI uri = new MongoClientURI("mongodb://localhost:27017/");
            MongoClient mongoClient = new MongoClient(uri);
            System.out.println("Conexion exitosa a MongoDB");
            mongoClient.close();
        } catch(Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
