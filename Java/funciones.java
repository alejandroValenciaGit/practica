import java.util.Scanner;

public class funciones {
    public static void mostrar() {
        System.out.println("Hola mundo funciones");
    }
    
    public static double suma(double a, double b) {
        return a + b;
    }
    
    public static double resta(double a, double b) {
        return a - b;
    }
    
    public static double multiplicacion(double a, double b) {
        return a * b;
    }
    
    public static double division(double a, double b) {
        if (b == 0) {
            System.out.println("Error; No se puede dividir por cero.");
            return 0;
        }
        return a / b;
    }
    
    public static double exponente(double a, double b) {
        return Math.pow(a, b);
    }
    
    public static void main(String[] args) {
        mostrar();
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Calculadora en Java ----");
            System.out.println("1. Suma");
            System.out.println("2. Resta");
            System.out.println("3. Multiplicacion");
            System.out.println("4. Division");
            System.out.println("5. Exponente");
            System.out.println("6. Salir");
            System.out.print("Seleccione una opción (1-6): ");
            String opcion = sc.nextLine();
            
            if (opcion.equals("6")) {
                System.out.println("Saliendo de la calculadora...");
                break;
            }
            
            if (!opcion.equals("1") && !opcion.equals("2") && !opcion.equals("3") && !opcion.equals("4") && !opcion.equals("5")) {
                System.out.println("Opción no válida. Intente de nuevo.");
                continue;
            }
            
            System.out.print("Ingrese el primer numero: ");
            double num1 = sc.nextDouble();
            System.out.print("Ingrese el segundo numero: ");
            double num2 = sc.nextDouble();
            sc.nextLine(); // consumir el salto de línea
            
            double resultado = 0;
            switch (opcion) {
                case "1":
                    resultado = suma(num1, num2);
                    break;
                case "2":
                    resultado = resta(num1, num2);
                    break;
                case "3":
                    resultado = multiplicacion(num1, num2);
                    break;
                case "4":
                    resultado = division(num1, num2);
                    break;
                case "5":
                    resultado = exponente(num1, num2);
                    break;
            }
            System.out.println("Resultado: " + resultado);
        }
        sc.close();
    }
}
