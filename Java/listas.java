import java.util.*;

public class listas {
    public static void main(String[] args) {
        List<Integer> mi_lista = Arrays.asList(34, 12, 465, 67, 23, 89, 5, 90, 56, 78);
        
        // Ordenamos la lista (creando una copia mutable)
        List<Integer> lista_ordenada = new ArrayList<>(mi_lista);
        Collections.sort(lista_ordenada);
        System.out.println("Lista ordenada: " + lista_ordenada);
        
        // Extraemos un rango (índices 2 a 6)
        List<Integer> sub_lista = lista_ordenada.subList(2, 7);
        System.out.println("Sublista (índices 2 al 6): " + sub_lista);
        
        // Nueva lista con elementos elevados al cuadrado
        List<Integer> nueva_lista = new ArrayList<>();
        for (int num : sub_lista) {
            nueva_lista.add(num * num);
        }
        System.out.println("Nueva lista con elementos elevados al cuadrado: " + nueva_lista);
        
        // Lista modificada: reemplazar el tercer elemento por 100
        List<Integer> lista_modificada = new ArrayList<>(mi_lista);
        if (lista_modificada.size() >= 3)
            lista_modificada.set(2, 100);
        System.out.println("Lista modificada: " + lista_modificada);
    }
}
