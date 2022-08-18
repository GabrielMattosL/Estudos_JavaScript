// == (comparação implícita)

const numero = 5; // number
const texto = "5"; // string

const textoAlterado = Number(texto)
console.log(typeof textoAlterado)

// console.log(numero == texto); // true <= é comparado apenas os valores implicitos e explicitos

// const numero1 = 1;
// const texto1 = "um";

// console.log(numero1 == texto1); // false <= é comparado apenas os valores implicitos e explicitos

// //typeof <- nos mostra o tipo de dado que está sendo armazenado dentro da variável

// console.log(typeof numero);
// console.log(typeof texto);

// // == só compara o valor
// // === compara o valor e o tipo de dado

// // conversão explicita (aquela que nós realizamos a conversão)

// Number()
// String()