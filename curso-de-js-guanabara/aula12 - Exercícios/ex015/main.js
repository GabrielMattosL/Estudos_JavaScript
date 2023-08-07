function verificar() {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();

    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var fSex = document.getElementsByName('radsex');
    var img = document.querySelector('img#imagem')
    var idade = anoAtual - Number(fAno.value);
    var genero = '';

    fSex[0].checked ? genero = 'Masculino' : genero = 'Feminino'
    res.innerHTML = `Detectamos idade ${idade} e sexo ${genero}`

    fAno.value.length == 0 || fAno.value > anoAtual ? window.alert('Verifique os Dados Mencionados Acima.') : ''

    if (genero == 'Masculino') {
        if (idade >= 0 && idade < 10) {
            img.src = 'src/image/bebe-menino.jpg'
        } else if (idade >= 10 && idade < 21) {
            img.src = 'src/image/jovem-homem.jpg'
        } else if (idade < 50) {
            img.src = 'src/image/homem-adulto.jpg'
        } else {
            img.src = 'src/image/homem-idoso.jpg'
        }
    } else if (genero == 'Feminino') {
        if (idade >= 0 && idade < 10) {
            img.src = 'src/image/bebe-menina.jpg'
        } else if (idade >= 10 && idade < 21) {
            img.src = 'src/image/jovem-mulher.jpg'
        } else if (idade < 50) {
            img.src = 'src/image/mulher-adulta.jpg'
        } else {
            img.src = 'src/image/mulher-idosa.jpg'
        }
    }

}