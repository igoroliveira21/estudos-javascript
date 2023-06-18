// Armazenando funçao em variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
} 

imprimirSoma(5, 3)


//Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 8))


//retorno implícito

const subtracao = (a, b) => a - b

console.log(subtracao(3, 2))


const imprimir2 = a => console.log(a)
imprimir2('Legal')