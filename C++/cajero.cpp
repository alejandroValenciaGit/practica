#include <iostream>
#include <string>
using namespace std;

int main() {
    double saldo = 1000.0;
    while (true) {
        cout << "\n--- Cajero Automático ---" << endl;
        cout << "1. Consultar saldo" << endl;
        cout << "2. Retirar dinero" << endl;
        cout << "3. Depositar dinero" << endl;
        cout << "4. Salir" << endl;
        cout << "Elige una opción: ";
        string opcion;
        getline(cin, opcion);

        if (opcion == "1") {
            cout << "Tu saldo actual es: $" << saldo << endl;
        } else if (opcion == "2") {
            cout << "Ingresa la cantidad a retirar: $";
            double cantidad;
            cin >> cantidad;
            cin.ignore();
            if (cantidad > saldo)
                cout << "Fondos insuficientes." << endl;
            else {
                saldo -= cantidad;
                cout << "Retiro exitoso. Tu nuevo saldo es: $" << saldo << endl;
            }
        } else if (opcion == "3") {
            cout << "Ingresa la cantidad a depositar: $";
            double cantidad;
            cin >> cantidad;
            cin.ignore();
            saldo += cantidad;
            cout << "Depósito exitoso. Tu nuevo saldo es: $" << saldo << endl;
        } else if (opcion == "4") {
            cout << "Gracias por usar el cajero. ¡Hasta luego!" << endl;
            break;
        } else {
            cout << "Opción inválida, intenta de nuevo." << endl;
        }
    }
    return 0;
}
