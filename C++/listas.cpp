#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> mi_lista = {34, 12, 465, 67, 23, 89, 5, 90, 56, 78};
    
    // Ordenamos la lista
    vector<int> lista_ordenada = mi_lista;
    sort(lista_ordenada.begin(), lista_ordenada.end());
    cout << "Lista ordenada: ";
    for (int n : lista_ordenada)
        cout << n << " ";
    cout << endl;
    
    // Extraemos un rango de la lista (índices 2 a 6)
    vector<int> sub_lista(lista_ordenada.begin() + 2, lista_ordenada.begin() + 7);
    cout << "Sublista (indices 2 al 6): ";
    for (int n : sub_lista)
        cout << n << " ";
    cout << endl;
    
    // Nueva lista con elementos elevados al cuadrado
    vector<int> nueva_lista;
    for (int n : sub_lista)
        nueva_lista.push_back(n * n);
    cout << "Nueva lista con elementos elevados al cuadrado: ";
    for (int n : nueva_lista)
        cout << n << " ";
    cout << endl;
    
    // Lista modificada: reemplazamos el tercer elemento por 100
    vector<int> lista_modificada = mi_lista;
    if (lista_modificada.size() >= 3)
        lista_modificada[2] = 100;
    cout << "Lista modificada: ";
    for (int n : lista_modificada)
        cout << n << " ";
    cout << endl;
    
    return 0;
}
