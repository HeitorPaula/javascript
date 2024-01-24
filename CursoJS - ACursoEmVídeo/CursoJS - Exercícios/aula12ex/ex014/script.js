
function carregar() {
    var nome = window.prompt ('Qual é o seu nome?')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minutos = new Date()
    var hora = data.getHours()
    var min = minutos.getMinutes()
    msg.innerHTML = `Olá ${nome}! Agora são ${hora}:${min} horas!<br/>`
    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        //msg.innerHTML += 'Bom Dia!'
    } else if (hora >= 13 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        //msg.innerHTML += 'Boa Tarde!'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#362e43'
       // msg.innerHTML += 'Boa Noite!'
    }
}
