class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol() // cria um identifcador único
    }
}

let jogadores=[new Jogador("J1"), new Jogador("J2"), new Jogador("J3"), new Jogador("J4")]

// let s1 = jogadores[3].id
let s = []

let s_jogadores = jogadores.filter((j)=>{
    return j.nome == "J1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(s_jogadores)
console.log(s)