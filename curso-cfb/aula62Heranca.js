class Carro{ //Class Pai
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor=""
    }
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    setCor=function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{//Class Militar erdando a Class Carro class filho
    constructor(nome, portas, blindagem, municao){
        super(nome,portas)// invocar alguém d class pai super()
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao > 0 ){
            this.municao--
        }
    }
    
}

class Utilitário extends Carro{
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares
    }
}

const c1 = new Carro("Gol", 4)
c1.ligar()
c1.setCor('preto')

const c2 = new Militar("Lutador", 4, 100, 50)
c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()



console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

console.log("---------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log("---------------------")
