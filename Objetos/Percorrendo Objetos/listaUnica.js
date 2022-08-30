const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "12345678901",
        email: "andre@email.com",
        fones: ["55912345678", "5534562345", "5534678420"],
        dependentes: [
        {
            nome: "Sara Silva", 
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Erica Silva",
            parentesco: "filha",
            dataNasc: "14/04/2014"
        }],
    },
    {
        nome:"Juliana",
        idade: 46,
        cpf: "453648987-40",
        email: "juliana@email.com",
        fones: ["67953478341", "67945678946"],
        dependentes: [
        {
            nome: "Ana Beatriz",
            parentesco: "filha",
            dataNasc: "04/06/2001"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)