#include <iostream>
#include <string>
using namespace std;

int main(){
    while(true) {
        cout << "Calculadora de la Ley de Ohm" << endl;
        cout << "Selecciona la variable a calcular:" << endl;
        cout << "1. Voltaje (V)" << endl;
        cout << "2. Corriente (I)" << endl;
        cout << "3. Resistencia (R)" << endl;
        cout << "4. Salir" << endl;
        cout << "Ingresa tu opción (1, 2, 3 o 4): ";
        
        string opcion;
        getline(cin, opcion);
        
        if(opcion == "1") {
            double I, R;
            cout << "Ingresa la corriente (I) en amperios: ";
            cin >> I;
            cout << "Ingresa la resistencia (R) en ohmios: ";
            cin >> R;
            cin.ignore();
            double V = I * R;
            cout << "El voltaje (V) es: " << V << " voltios" << endl;
        } else if(opcion == "2") {
            double V, R;
            cout << "Ingresa el voltaje (V) en voltios: ";
            cin >> V;
            cout << "Ingresa la resistencia (R) en ohmios: ";
            cin >> R;
            cin.ignore();
            if(R != 0) {
                double I = V / R;
                cout << "La corriente (I) es: " << I << " amperios" << endl;
            } else {
                cout << "La resistencia no puede ser 0." << endl;
            }
        } else if(opcion == "3") {
            double V, I;
            cout << "Ingresa el voltaje (V) en voltios: ";
            cin >> V;
            cout << "Ingresa la corriente (I) en amperios: ";
            cin >> I;
            cin.ignore();
            if(I != 0) {
                double R = V / I;
                cout << "La resistencia (R) es: " << R << " ohmios" << endl;
            } else {
                cout << "La corriente no puede ser 0." << endl;
            }
        } else if(opcion == "4") {
            cout << "Gracias por usar el programa." << endl;
            break;
        } else {
            cout << "Opción inválida." << endl;
        }
        cout << endl;
    }
    
    return 0;
}
