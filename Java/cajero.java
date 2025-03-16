import java.util.Scanner;

public class cajero {
    public static void main(String[] args) {
        double saldo = 1000.0;
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Cajero Automático ---");
            System.out.println("1. Consultar saldo");
            System.out.println("2. Retirar dinero");
            System.out.println("3. Depositar dinero");
            System.out.println("4. Salir");
            System.out.print("Elige una opción: ");
            String opcion = sc.nextLine();
            
            if (opcion.equals("1")) {
                System.out.println("Tu saldo actual es: $" + saldo);
            } else if (opcion.equals("2")) {
                System.out.print("Ingresa la cantidad a retirar: $");
                double cantidad = sc.nextDouble();
                sc.nextLine();
                if (cantidad > saldo) {
                    System.out.println("Fondos insuficientes.");
                } else {
                    saldo -= cantidad;
                    System.out.println("Retiro exitoso. Tu nuevo saldo es: $" + saldo);
                }
            } else if (opcion.equals("3")) {
                System.out.print("Ingresa la cantidad a depositar: $");
                double cantidad = sc.nextDouble();
                sc.nextLine();
                saldo += cantidad;
                System.out.println("Depósito exitoso. Tu nuevo saldo es: $" + saldo);
            } else if (opcion.equals("4")) {
                System.out.println("Gracias por usar el cajero. ¡Hasta luego!");
                break;
            } else {
                System.out.println("Opción inválida, intenta de nuevo.");
            }
        }
        sc.close();
    }
}
