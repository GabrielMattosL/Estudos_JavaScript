function tabuada() {
    let number = document.querySelector('input#txtn');
    let tabuada = document.querySelector('select#seltab');

    if (number.value.length == 0) {
        window.alert('Digite Algo')
    } else {
        let n = Number(number.value)
        let contador = 1
        tab.innerHTML = ''
        while(contador <= 10) {
            let item = document.createElement('option');
            item.text = `${contador} x ${n} = ${contador*n}`;
            item.value = `tab${contador}`
            tabuada.appendChild(item);
            contador++
        }
    }

}