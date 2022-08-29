const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com",
    fones:["55912345678", "5534562345", "5534678420"],
    dependentes:[{
            nome: "Sara Silva", 
            parentesco: "filha",
            dataNasc: "20/03/2011"
        }]
}

cliente.dependentes.push({
            nome: "Erica Silva", 
            parentesco: "filha", 
            dataNasc: "14/04/2014"
        })

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "14/04/2014")

33096435 - remuneração
1658 - domenico
console.log(filhaMaisNova[0].nome)