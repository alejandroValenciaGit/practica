import java.util.Scanner;

public class ohm {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("Calculadora de la Ley de Ohm");
            System.out.println("Selecciona la variable a calcular:");
            System.out.println("1. Voltaje (V)");
            System.out.println("2. Corriente (I)");
            System.out.println("3. Resistencia (R)");
            System.out.println("4. Salir");
            System.out.print("Ingresa tu opción (1, 2, 3 o 4): ");
            String opcion = sc.nextLine();
            
            if (opcion.equals("1")) {
                System.out.print("Ingresa la corriente (I) en amperios: ");
                double I = sc.nextDouble();
                System.out.print("Ingresa la resistencia (R) en ohmios: ");
                double R = sc.nextDouble();
                sc.nextLine();
                double V = I * R;
                System.out.println("El voltaje (V) es: " + V + " voltios");
            } else if (opcion.equals("2")) {
                System.out.print("Ingresa el voltaje (V) en voltios: ");
                double V = sc.nextDouble();
                System.out.print("Ingresa la resistencia (R) en ohmios: ");
                double R = sc.nextDouble();
                sc.nextLine();
                if (R != 0) {
                    double I = V / R;
                    System.out.println("La corriente (I) es: " + I + " amperios");
                } else {
                    System.out.println("La resistencia no puede ser 0.");
                }
            } else if (opcion.equals("3")) {
                System.out.print("Ingresa el voltaje (V) en voltios: ");
                double V = sc.nextDouble();
                System.out.print("Ingresa la corriente (I) en amperios: ");
                double I = sc.nextDouble();
                sc.nextLine();
                if (I != 0) {
                    double R = V / I;
                    System.out.println("La resistencia (R) es: " + R + " ohmios");
                } else {
                    System.out.println("La corriente no puede ser 0.");
                }
            } else if (opcion.equals("4")) {
                System.out.println("Gracias por usar el programa.");
                break;
            } else {
                System.out.println("Opción inválida.");
            }
            System.out.println();
        }
        sc.close();
    }
}
