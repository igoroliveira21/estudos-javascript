const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const tlimpar=document.getElementById("tlimpar")
const tigual=document.querySelector("#tigual")
const tcpy=document.querySelector("#tcpy")
const teste=document.querySelector("#teste")


let sinal = false
let decimal = false

teclasNum.forEach((e)=>{
    e.addEventListener("click", (evt)=>{
        sinal=false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML==="0"){
                    display.innerHTML="0,"           
                } else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }      
        }else{
            if(display.innerHTML==="0"){
                display.innerHTML=""
            } 
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((e)=>{
    e.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true  
            if(display.innerHTML==="0"){
                display.innerHTML=""
            }          
            if(evt.target.innerHTML==="x"){
                display.innerHTML+="*"                
            } else {
                display.innerHTML+=evt.target.innerHTML
            }          
        }    
    })
})

tlimpar.addEventListener("click", (evt)=>{
    sinal=true
    decimal=false
    display.innerHTML=0
})

tigual.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})

tcpy.addEventListener("click", (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()
    // teste.setSelectionRange(0, 99999)//Mobile
    // navigator.clipboard.writeText(teste.value)
})