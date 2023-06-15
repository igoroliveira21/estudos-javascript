function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        console.log('ERRO! Digite um número!!')
    } else {
        var n = Number(num.value)
        var c = 1
        for(c = 1; c <= 10; c++) {
            var item = document.getElementById('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}