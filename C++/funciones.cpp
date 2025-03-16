#include <iostream>
#include <cmath>
#include <string>
using namespace std;

void mostrar() {
    cout << "Hola mundo funciones" << endl;
}

double suma(double a, double b) {
    return a + b;
}

double resta(double a, double b) {
    return a - b;
}

double multiplicacion(double a, double b) {
    return a * b;
}

double division(double a, double b) {
    if (b == 0) {
        cout << "Error; No se puede dividir por cero." << endl;
        return 0;
    }
    return a / b;
}

double exponente(double a, double b) {
    return pow(a, b);
}

int main() {
    mostrar();
    while (true) {
        cout << "\n--- Calculadora en C++ ----" << endl;
        cout << "1. Suma" << endl;
        cout << "2. Resta" << endl;
        cout << "3. Multiplicacion" << endl;
        cout << "4. Division" << endl;
        cout << "5. Exponente" << endl;
        cout << "6. Salir" << endl;
        cout << "Seleccione una opción (1-6): ";
        string opcion;
        getline(cin, opcion);
        if (opcion == "6") {
            cout << "Saliendo de la calculadora..." << endl;
            break;
        }
        if (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4" && opcion != "5") {
            cout << "Opción no válida. Intente de nuevo." << endl;
            continue;
        }
        double num1, num2;
        cout << "Ingrese el primer numero: ";
        cin >> num1;
        cout << "Ingrese el segundo numero: ";
        cin >> num2;
        cin.ignore();
        double resultado = 0;
        if (opcion == "1") {
            resultado = suma(num1, num2);
        } else if (opcion == "2") {
            resultado = resta(num1, num2);
        } else if (opcion == "3") {
            resultado = multiplicacion(num1, num2);
        } else if (opcion == "4") {
            resultado = division(num1, num2);
        } else if (opcion == "5") {
            resultado = exponente(num1, num2);
        }
        cout << "Resultado: " << resultado << endl;
    }
    return 0;
}
