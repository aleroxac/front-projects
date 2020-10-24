function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora > 0 && hora < 12) {
        // Bom dia
        document.body.style.background = '#e8c368'
        img.src = 'img/manha.jpeg'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        document.body.style.background = '#1192a8'
        img.src = 'img/afternoon.jpeg'
    }
    else {
        // Boa noite
        document.body.style.background = '#290505'
        img.src = 'img/night.jpeg'
    }
}