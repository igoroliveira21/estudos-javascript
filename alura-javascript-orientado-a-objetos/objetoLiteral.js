const user = {
    nome: "Juliana",
    email: "j@j.com",
    nasciment:"2021/01/01",
    role: "estudante",
    ativo: true,
    nivel: 2,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

