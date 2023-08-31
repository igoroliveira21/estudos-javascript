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

cliente.enderecos.push({
    rua:"Rua do Campinho",
    numero: 403,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => {
    return endereco.apartamento === true
});

console.log(listaApenasApartamentos)