const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["Nome"])