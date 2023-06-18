// par chave/valor
const saudacao = 'Opa' //Contexto léxico 1

function exec() {
    const saudacao = 'Fala' // Contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua subida do campinho',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)