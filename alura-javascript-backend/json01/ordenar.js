const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) {
            return -1; //se a < b a está depois de B
        }
        if(a[propriedade] > b[propriedade]) {
            return 1; // se a > b a está na frente de b
        }
        return 0; // return 0 se forem iguais
    })

    return resultado;
}

const ordernarNome = ordenar(clientes, "nome");

console.log(ordernarNome)