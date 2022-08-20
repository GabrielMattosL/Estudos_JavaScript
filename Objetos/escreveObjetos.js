const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com"
}

console.log(`Seja bem vindo ${cliente.nome}, seu e-mail de recuperação é "${cliente.email}"`)
console.log(`Seu CPF é: ${cliente.cpf.substring(0,3)}.###.###-##`)