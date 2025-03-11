const mi_lista = [34, 12, 465, 67, 23, 89, 5, 90, 56, 78];

function operar_listas(lista) {
    let lista_ordenada = [...lista].sort((a, b) => a - b);
    console.log("Lista ordenada: ", lista_ordenada);

    let sub_lista = lista_ordenada.slice(2, 7);
    console.log("Sublista (índices 2 al 6): ", sub_lista);

  let nueva_lista = sub_lista.map(x => x * x);
    console.log("Nueva lista con elementos elevados al cuadrado: ", nueva_lista);

    let lista_modificada = [...lista];
    lista_modificada[2] = 100;
    console.log("Lista modificada: ", lista_modificada);

    return {lista_ordenada, sub_lista, nueva_lista, lista_modificada};
}

const {lista_ordenada, sub_lista, nueva_lista, lista_modificada} = operar_listas(mi_lista);

const animales = ["perro", "gato", "foca", "leon", "tiburon", "colibri"];
const animales1 = animales;
console.log(animales1);

const a = "Abeja";
const b = "Mosca";
const c = "Libelula";
const miLista = [a, b, c];
console.log(miLista);
