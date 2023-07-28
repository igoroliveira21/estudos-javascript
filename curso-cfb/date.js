const data_div=document.querySelector("#data")
const relogio = document.querySelector("#relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#btn_parar")
const tmp_alarme=document.querySelector("#tmp_alarme")
const hora_alarme=document.querySelector("#hora_alarme")
const timer=document.querySelector("#timer")

const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0"+dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0"+mes : mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()
data_div.innerHTML=data_r

let som_alarme = new Audio("alarme.mp3") // aqui vai um som de alarme 
som_alarme.loop = -1 //loop infinito

let ts_atual = null // 
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", (evt)=>{
    ts_atual = Date.now()//pegando o timeStamp atual
    ts_alarme = ts_atual + (tmp_alarme.value * 1000)//MiliSeconds p/sec
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)//pegando a data e hora do alarme
    let hora = dt_alarme.getHours()
    hora = hora < 10 ? "0"+hora : hora
    let minuto = dt_alarme.getMinutes()
    minuto=minuto < 10 ? "0"+minuto : minuto
    let segundos = dt_alarme.getSeconds()
    segundos = segundos < 10 ? "0"+segundos : segundos
    hora_alarme.innerHTML=`Hora do Alarme:${hora}:${minuto}:${segundos}`
})

btn_parar.addEventListener("click", (evt)=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0 
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0;
})


const crelogio=() =>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0"+hora : hora
    let minuto = data.getMinutes()
    minuto=minuto < 10 ? "0"+minuto : minuto
    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0"+segundos : segundos
    const hora_completa = `${hora}:${minuto}:${segundos}`
    relogio.innerHTML= hora_completa
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo=setInterval(crelogio, 1000)//setInterval é uma função que chama outra função de tantos em tantos tempo


/* 
getDate()= Dia do mês
getDay()=dia da semana (numeros)
getFullYear()=ano com 4 digitos
getHours()= horas
getMilliseconds()= milisegundos
getTime()=Timestamp(milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
Date.now() = timestamp(milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
getTimezoneOffset() = timezone da localidade
setDate()= Define um dia do mÊs para a data
setMonth()= define um mês para a Data
setFullYear()=Define um ano para a data
setHours()=Define horas
toDateString()=retorna somente a data
*/