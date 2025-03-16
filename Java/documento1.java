import java.util.Scanner;

public class documento1 {
    public static void main(String[] args) {
        // Operación simple
        int a = 5, b = 6;
        int c = a + b;
        System.out.println("Suma simple (5 + 6): " + c);
        System.out.println();
        
        Scanner sc = new Scanner(System.in);
        
        // Solicitar dos números y una operación
        System.out.print("Escriba un numero: ");
        int num1 = sc.nextInt();
        System.out.print("Escriba otro numero: ");
        int num2 = sc.nextInt();
        System.out.print("Escribe la operacion (+, -, *, /, **): ");
        String op = sc.next();
        
        int suma = num1 + num2;
        int resta = num1 - num2;
        int multiplicacion = num1 * num2;
        double division = (num2 != 0) ? (double) num1 / num2 : 0;
        double potencia = Math.pow(num1, num2);
        
        System.out.println("\nEl total de la suma es: " + suma);
        System.out.println("El resultado de la resta es: " + resta);
        System.out.println("El producto de la multiplicacion es: " + multiplicacion);
        if (num2 != 0)
            System.out.println("El cociente de la division es: " + division);
        else
            System.out.println("No se puede dividir por cero.");
        System.out.println("La potencia es: " + potencia);
        System.out.println();
        
        // Mostrar resultado según la operación ingresada
        if (op.equals("+")) {
            System.out.println("El total de la suma es: " + suma);
        } else if (op.equals("-")) {
            System.out.println("El resultado de la resta es: " + resta);
        } else if (op.equals("*")) {
            System.out.println("El producto de la multiplicacion es: " + multiplicacion);
        } else if (op.equals("/")) {
            if (num2 != 0)
                System.out.println("El cociente de la division es: " + division);
            else
                System.out.println("No se puede dividir por cero.");
        } else if (op.equals("**")) {
            System.out.println("La potencia es: " + potencia);
        } else {
            System.out.println("Asigne valores validos");
        }
        
        sc.close();
    }
}

