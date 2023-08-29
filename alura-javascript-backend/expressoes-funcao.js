// //expressão de function


// // console.log(soma(3, 2))

// //diferença principal???


// console.log(apresentar())

// // function apresentar() {
// //     return "Olá";
// // }

// const soma = function(num1, num2) {
//     return num1 + num2
// }

// console.log(soma(2, 3))


const apresentar = (nome, idade) => `nome:${nome} idade:${idade}`
console.log(apresentar('Igor', 33))

//Arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

