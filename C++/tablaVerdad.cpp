#include <iostream>
using namespace std;

int main() {
    cout << "Tabla de la verdad para la expresión (A AND B) OR (NOT A)" << endl;
    cout << "A\tB\tResultado" << endl;
    
    bool valores[2] = {false, true};
    
    // Usamos boolalpha para imprimir "true"/"false"
    for (bool A : valores) {
        for (bool B : valores) {
            bool resultado = (A && B) || (!A);
            cout << boolalpha << A << "\t" << B << "\t" << resultado << endl;
        }
    }
    
    return 0;
}
