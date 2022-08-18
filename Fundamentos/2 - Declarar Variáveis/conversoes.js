// tipo de dados
// booleanos

// conversão implícita
const numero = 89;
const numeroString = "89";

console.log(numero == numeroString);
//Number()

console.log(numero + numeroString);
console.log(numero + Number(numeroString));

let numero1 = 32
let numero2 = "32a" //causa um NaN

console.log(numero1 + Number(numero2))
//String()


// conversão explicita
