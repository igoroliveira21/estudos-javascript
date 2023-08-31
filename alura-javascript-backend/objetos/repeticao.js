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

for (let chave in cliente) { // vai pegar todas as chaves do cliente
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`${chave}: ${cliente[chave]}`);
    }
}