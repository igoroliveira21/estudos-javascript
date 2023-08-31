const cliente = {
    nome: "João",
    idade: 24,
    email: "joão@firma.com",
    telefone: ['21977391917', '21977381926'],
};

cliente.enderecos = [
    {
    rua: "Rua ABC",
    numero: 5,
    apartamento: true,
    complemento: "ap 304",
    }, 
];

const chavesDoObjeto = Object.keys(cliente); // vai retornar um array com todas as chaves que foram iniciadas de cliente

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes("enderecos")){
    console.error('Erro. É necessário ter um endereço cadastrado!')
}
