const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const ton=document.querySelector("#ton")
const tlimpar=document.querySelector("#tlimpar")
const tigual=document.querySelector("#tigual")

let sinal=false
let decimal=false

teclasNum.forEach((e)=>{
    e.addEventListener("click", (evt)=>{
        sinal=false //Se digitar algum número o sinal passa a ser false, para poder digitar outro sinal depois do número
        if(display.innerHTML="0"){
            display.innerHTML=""
        }
        if(evt.target.innerHTML=","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                } else{
                    display.innerHTML+=evt.target.innerHTML 
                }
            }
        }else{
            display.innerHTML+=evt.target.innerHTML        
        }
    })
})

teclasOp.forEach((e)=>{
    e.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true //toda vez que digitar um operador sinal recebe true
            if(display.innerHTML="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tigual.addEventListener("click", (evt)=>{
    sinal=false
    decima=false
    const res = eval(display.innerHTML) //eval avilia a expressão e executa
    display.innerHTML = res
})