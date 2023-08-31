const cliente = {
    nome: "João",
    idade: 24,
    email: "joão@firma.com",
    telefone: ['21977391917', '21977381926'],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if(valor > this.saldo) {
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: R$${this.saldo}`)
        }
    },
};

cliente.efetuaPagamento(25);