//prototype serve para adicionar uma propriedade ou um metodo a um objeto
const Nave=function(energia){
    this.energia=energia
    this.disparo=100
}

const n1=new Nave(100)

Nave.prototype.vidas=3
Nave.prototype.disparar = function(){
    if(this.disparo > 0){
        this.disparo--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()


console.log(Nave)
console.log(n1)
console.log(n1.vidas)
