def tabla_verdad():
    print("Tabla de la verdad para la expresión (A AND B) OR (NOT A)")
    print("A\tB\tResultado")
    for A in [False, True]:
        for B in [False, True]:
            resultado = (A and B) or (not A)
            print(A, "\t", B, "\t", resultado)

tabla_verdad()
