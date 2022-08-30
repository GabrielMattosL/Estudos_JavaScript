const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345678901",
    email:"andre@email.com",
    fones:["55912345678", "5534562345", "5534678420"],
    dependentes:[
        {
            nome: "Sara Silva", 
            parentesco: "filha",
            dataNasc: "20/03/2011"},
        {
            nome: "Erica Silva", 
            parentesco: "filha", 
            dataNasc: "14/04/2014"
        }
    ]
}

let relatorio = "";

for ( let info in cliente ) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue 
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `
    }
}

console.log(relatorio)