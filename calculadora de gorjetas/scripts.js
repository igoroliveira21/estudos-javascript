function calcGorjeta(event) {
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let qualservico = document.getElementById('qualservico').value;
    let numPessoas = document.getElementById('pessoa').value;

    if(conta == '' | qualservico == 0) {
        alert("Por favor, peencha os valores")
        return;
    }

    if(numPessoas == '' | numPessoas <= 1) {
        numPessoas = 1; 
        document.getElementById('each').style.display = "none"        
    } else {
        document.getElementById('each').style.display = "block" 
    }

    let total = (conta * qualservico) / numPessoas;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = 'block';
}

document.getElementById('totalTip').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calcGorjeta)