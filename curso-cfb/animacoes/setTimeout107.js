const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#parar")

const init=()=>{
    carro.style = "position: relative; left:0px; width:100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null

const mover = (dir) =>{
    if(dir > 0){//indo pra direita > 0
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left = parseInt(carro.style.left) + (10 * dir)+"px"
            anima = setTimeout(mover, 20, dir)   
        } else {
            clearTimeout(anima)
        }
    }else if(dir < 0){ // indo pra esquerda < 0
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10 * dir)+"px"
            anima = setTimeout(mover, 20, dir)   
        } else {
            clearTimeout(anima)
        }
    }
    console.log(tamMax)
    
}

btn_parar.addEventListener("click", ()=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener("click",()=>{
    clearTimeout(anima)
    mover(-1)
})


btn_direita.addEventListener("click",()=>{
    clearTimeout(anima)
    mover(1)
})


// window.onload = init
window.addEventListener("resize", ()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
})
window.addEventListtener("load", init())