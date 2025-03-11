def cajero():
    saldo = 1000.0  # Saldo inicial
    while True:
        print("\n--- Cajero Automático ---")
        print("1. Consultar saldo")
        print("2. Retirar dinero")
        print("3. Depositar dinero")
        print("4. Salir")
        opcion = input("Elige una opción: ")

        if opcion == "1":
            print("Tu saldo actual es: $", saldo)
        elif opcion == "2":
            cantidad = float(input("Ingresa la cantidad a retirar: $"))
            if cantidad > saldo:
                print("Fondos insuficientes.")
            else:
                saldo -= cantidad
                print("Retiro exitoso. Tu nuevo saldo es: $", saldo)
        elif opcion == "3":
            cantidad = float(input("Ingresa la cantidad a depositar: $"))
            saldo += cantidad
            print("Depósito exitoso. Tu nuevo saldo es: $", saldo)
        elif opcion == "4":
            print("Gracias por usar el cajero. ¡Hasta luego!")
            break
        else:
            print("Opción inválida, intenta de nuevo.")

cajero()
