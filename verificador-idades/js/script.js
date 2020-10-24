function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Impossível, preenche isso ai direito vai!')
        fano.value = ''
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'img/male-children.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/guy.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/man.jpeg')
            } else {
                img.setAttribute('src', 'img/old-man.jpeg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'img/female-children.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/girl.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/woman.jpeg')
            } else {
                img.setAttribute('src', 'img/old-woman.jpeg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)


        if (idade >= 85) {
            mensagem.innerHTML = 'Tá fazendo hora extra!'
        } else if (idade <= 25) {
            mensagem.innerHTML = 'Envelhece primeiro, depois você pode opinar...'
        }
        else if (idade >= 18 && idade <= 40) {
            mensagem.innerHTML = 'Aproveita, que o tempo passa...'
        }
        else if (idade <= 15) {
            mensagem.innerHTML = 'Vai um Toddynho?'
        }
        else {
            mensagem.innerHTML = 'Sua vida ainda tem aquela textura?'
        }


    }
}