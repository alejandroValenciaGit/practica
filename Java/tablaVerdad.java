public class tablaVerdad {
    public static void main(String[] args) {
        System.out.println("Tabla de la verdad para la expresión (A AND B) OR (NOT A)");
        System.out.println("A\tB\tResultado");
        
        boolean[] valores = { false, true };
        
        for (boolean A : valores) {
            for (boolean B : valores) {
                boolean resultado = (A && B) || (!A);
                System.out.println(A + "\t" + B + "\t" + resultado);
            }
        }
    }
}
