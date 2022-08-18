function apresentar(nome) {
    return `meu nome é ${nome}`
}

//arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

//arrow function com + de uma linha
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 9 || num2 > 9) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(10, 10))