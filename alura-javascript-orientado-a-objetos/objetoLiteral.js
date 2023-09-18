const user = {
    nome: "Juliana",
    email: "j@j.com",
    nasciment:"2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()
