const data_div=document.querySelector("#data")
const data = new Date()

const dia_m=data.getDate() < 10 ? "0"+data.getDate() : data.getDate()

const mes = data.getMonth() < 10 ? "0"+data.getMonth() : data.getMonth

const data_r=dia_m+"/"+mes+"/"+data.getFullYear()

data_div.innerHTML=data_r



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