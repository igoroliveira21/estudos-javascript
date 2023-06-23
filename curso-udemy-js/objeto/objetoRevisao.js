// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Caidera' //Padrão
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco: {
            logradouro: 'RUA TTT',
            numero: 111         
        }
    },
    condutores: [{
        nome: 'Julio',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ... Analisar tempo de seguro, etc...
    }    
}

carro.proprietario.endereco.numero = 1000
carro.proprietario.endereco.logradouro = 'Av brail'
console.log(carro)