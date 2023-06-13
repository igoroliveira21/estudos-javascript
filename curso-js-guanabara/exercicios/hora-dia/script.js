function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '../hora-dia/imagens/manha.jpg'
        document.body.style.background = 'rgb(153, 156, 135)'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = '../hora-dia/imagens/tarde.jpg'
        document.body.style.background = 'rgb(96, 102, 108)'
    } else {
        //BOA NOITE
        img.src = '../hora-dia/imagens/noite.jpg'
        document.body.style.background = 'rgb(19, 109, 160)'
    }
}