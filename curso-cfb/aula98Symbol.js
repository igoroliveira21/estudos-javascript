class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol() // cria um identifcador único
    }
}

let jogadores=[new Jogador("J1"), new Jogador("J2"), new Jogador("J3"), new Jogador("J4"), new Jogador("J1")]

// let s1 = jogadores[3].id
let s = []

let s_jogadores = jogadores.filter((j)=>{
    return j.nome == "J1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

r_simbolos = jogadores.filter((j)=>{
    return j.nome!="J1"
})

console.log(r_simbolos)
console.log(jogadores)
console.log(s_jogadores)
console.log(s)