import User from './User.js';

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    
    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
}


// const novoDocente = new Docente('Marinaldo', 'm@mm.com', '04/09/1987')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovarEstudante('Roberto', 'JavaScript'))