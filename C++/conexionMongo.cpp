#include <iostream>
// #include <mongocxx/client.hpp>
// #include <mongocxx/instance.hpp>
// #include <mongocxx/uri.hpp>

using namespace std;

int main() {
    // mongocxx::instance inst{}; // Inicializa la instancia MongoDB
    try {
        // mongocxx::client conn{mongocxx::uri{"mongodb://localhost:27017/"}};
        cout << "Conexion exitosa a MongoDB (simulado)" << endl;
    } catch (std::exception &e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}
