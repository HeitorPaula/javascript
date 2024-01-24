function contar() {
    var ini = document.getElementById('numin')
    var i = Number(ini.value)
    var fim = document.getElementById('numfim')
    var f = Number(fim.value)
    var passo = document.getElementById('numpass')
    var p = Number(passo.value)
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br/>'
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            //Contagem crescente...
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            //Contagem regressiva...
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
    
}
