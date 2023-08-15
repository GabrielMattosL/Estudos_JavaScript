function getTimeFromSeconds(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR',{ 
        hour12: false,
        timeZone: 'UTC'
    })
}

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = 'black';
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.style.color = 'black';
    segundos = 0;
});

