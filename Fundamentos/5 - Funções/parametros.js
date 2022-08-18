// parâmetros de função

function soma(num1, num2) { //a função vai receber os dois números por meio das variáveis num1 e num2;
    return num1 + num2;
}

// console.log(soma(2, 2))
// console.log(soma(-422, 2))
// console.log(soma("Gabriel ", "Antônio"))

// parametros x argumentos => são formas de passar valores para dentro de uma função;

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e eu tenho ${idade} anos.`
}

console.log(nomeIdade(20, "Gabriel"))

function multiplica(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplica(soma(2, 3), soma(4, 5)))