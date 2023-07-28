const data_div=document.querySelector("#data")
const relogio = document.querySelector("#relogio")

const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0"+dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0"+mes : mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()
data_div.innerHTML=data_r

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