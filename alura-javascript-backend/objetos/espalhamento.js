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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);

}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda)