class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol() // cria um identifcador único
    }
}

let jogadores=[new Jogador("J1"), new Jogador("J2"), new Jogador("J3"), new Jogador("J4")]

let s1 = jogadores[3].id

jogadores = jogadores.filter((j)=>{
    return j.id!=s1
})

console.log(jogadores)