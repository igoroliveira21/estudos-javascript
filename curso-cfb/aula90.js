const objetos = document.querySelector("#objetos")

let computador = {
    cpu:"AMD Ryzem 5",
    ram:"32gb",
    hd:"2tb",
    info:function () {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)

    }
}

const computadores=[{
    cpu:"AMD Ryzem 5 3600",
    ram:"32gb",
    hd:"2tb",
},
{
    cpu:"i5",
    ram:"16gb",
    hd:"1tb",
},
{
    cpu:"AMD Ryzem 5 5600",
    ram:"16gb",
    hd:"120gb",
}]

computadores.forEach((c)=>{
    console.log(c)
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd + "<br/>"
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})

// computador.info()
//console.log(computadores)
//Objetos.innerHTML = JSON.stringify(computadores)