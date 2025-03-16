#include <iostream>
#include <cmath>
#include <string>
using namespace std;

int main() {
    // Operación simple
    int a = 5, b = 6;
    int c = a + b;
    cout << "Suma simple (5 + 6): " << c << endl << endl;
    
    // Solicitar dos números y una operación
    int num1, num2;
    cout << "Escriba un numero: ";
    cin >> num1;
    cout << "Escriba otro numero: ";
    cin >> num2;
    
    // Consumir el salto de línea pendiente y leer la operación
    string op;
    cout << "Escribe la operacion (+, -, *, /, **): ";
    cin >> op;
    
    int suma = num1 + num2;
    int resta = num1 - num2;
    int multiplicacion = num1 * num2;
    double division = (num2 != 0) ? static_cast<double>(num1) / num2 : 0;
    double potencia = pow(num1, num2);
    
    cout << "\nEl total de la suma es: " << suma << endl;
    cout << "El resultado de la resta es: " << resta << endl;
    cout << "El producto de la multiplicacion es: " << multiplicacion << endl;
    if(num2 != 0)
        cout << "El cociente de la division es: " << division << endl;
    else
        cout << "No se puede dividir por cero." << endl;
    cout << "La potencia es: " << potencia << endl << endl;
    
    // Mostrar resultado según la operación ingresada
    if(op == "+") {
        cout << "El total de la suma es: " << suma << endl;
    } else if(op == "-") {
        cout << "El resultado de la resta es: " << resta << endl;
    } else if(op == "*") {
        cout << "El producto de la multiplicacion es: " << multiplicacion << endl;
    } else if(op == "/") {
        if(num2 != 0)
            cout << "El cociente de la division es: " << division << endl;
        else
            cout << "No se puede dividir por cero." << endl;
    } else if(op == "**") {
        cout << "La potencia es: " << potencia << endl;
    } else {
        cout << "Asigne valores validos" << endl;
    }
    
    return 0;
}
