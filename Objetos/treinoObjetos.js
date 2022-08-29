const pessoa = {
    nome: "Pitter Parker",
    dataDeNascimento: "12/04/1994",
    carteiraDeIdentidade:"461563-5",
    email: "pitterparker@email.com",
    telefone: "+55(43)99900-4533",
    cidade: "New York",
    bairro: "Queen's"
}

console.log(pessoa.carteiraDeIdentidade.substring(1,3));

let carteira2 = pessoa.carteiraDeIdentidade.substring(1,3);
console.log(carteira2);

//adicionar cpf
pessoa.cpf = "345.325.764-67"
console.log(pessoa.cpf)

let cpf2 = pessoa.cpf.substring(0,3);
console.log(cpf2);


