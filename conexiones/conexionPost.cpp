#include <iostream>
#include <libpq-fe.h>
using namespace std;

int main() {
    const char* conninfo = "host=localhost user=postgres password=12345";
    PGconn* conn = PQconnectdb(conninfo);
    if (PQstatus(conn) != CONNECTION_OK) {
        cout << "Conexion fallida: " << PQerrorMessage(conn) << endl;
        PQfinish(conn);
        return 1;
    }
    cout << "Conexion exitosa" << endl;
    PQfinish(conn);
    return 0;
}
