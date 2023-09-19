// function User (nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function () {
//         return `${this.nome}, ${this.email}`
//     }
// }

// const novoUser = new User('Igor', 'igorin@gmail.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Igor', 'igorin@gmail.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)


const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    }, // substitui a função construtora
    exibirInfos: function(nome) {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'igorin@gmail.com')
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('Igor'))
// console.log(user.isPrototypeOf(novoUser))