const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

const pessoa = {
    nome:'Igor',
    idade: 25,
}

const pessoaComTelefone = {...pessoa, telefone: 21977381927};

console.log(pessoa, pessoaComTelefone)


//USA MUITO

const {idade} = pessoa;
console.log(idade)

function imprimeDados({nome, idade}) {
    console.log(nome, idade)
}

imprimeDados(pessoa)