var txt = window.document.getElementById('txt');
var preparado = window.document.getElementById('preparado');
var res = window.document.getElementById('res');

function contar() {
    let inicio = window.document.getElementById('txt1');
    let fim = window.document.getElementById('txtf');
    let passo = window.document.getElementById('txtp');
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
        window.alert('Faltam dados')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
        }
    }
}