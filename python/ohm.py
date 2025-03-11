def ohm():
    while True:
        print("Calculadora de la Ley de Ohm")
        print("Selecciona la variable a calcular:")
        print("1. Voltaje (V)")
        print("2. Corriente (I)")
        print("3. Resistencia (R)")
        print("4. Salir")

        opcion = input("Ingresa tu opción (1, 2, 3 o 4): ")

        if opcion == "1":
            I = float(input("Ingresa la corriente (I) en amperios: "))
            R = float(input("Ingresa la resistencia (R) en ohmios: "))
            V = I * R
            print("El voltaje (V) es:", V, "voltios")
        elif opcion == "2":
            V = float(input("Ingresa el voltaje (V) en voltios: "))
            R = float(input("Ingresa la resistencia (R) en ohmios: "))
            if R != 0:
                I = V / R
                print("La corriente (I) es:", I, "amperios")
            else:
                print("La resistencia no puede ser 0.")
        elif opcion == "3":
            V = float(input("Ingresa el voltaje (V) en voltios: "))
            I = float(input("Ingresa la corriente (I) en amperios: "))
            if I != 0:
                R = V / I
                print("La resistencia (R) es:", R, "ohmios")
        elif opcion == "4":
            print("Gracias por usar el programa.")
            break
        else:
                print("La corriente no puede ser 0.")
    else:
            print("Opción inválida.")

ohm()
