const listagem = [];

function adiciona() {
    let num = document.getElementById('number');
    let lista = document.getElementById('lista');
    let n = Number(num.value);
    
    if(num.value.length == 0) {
        window.alert('Está vazio')
    } else if (listagem.indexOf(n) >= 0) {
        window.alert('esse número já existe na lista');
    } else if(n < 0 || n > 100) {
        window.alert('Digite apenas números entre 0 e 100')
    } else {
        listagem.push(n);
        
        let item = document.createElement('option')
        item.text = `${n} Foi adicionado`;
        item.value = n;
        item.id = `n${n}`;
        lista.appendChild(item);
    }
}

let array = [1, 2, 3];
let n = 1
console.log(array)
    if(array.indexOf(n) >= 0) {
        console.log('esse número já existe na lista');
    } else {
        console.log('número adicionado');
        array.push(n);
    }
console.log(array)