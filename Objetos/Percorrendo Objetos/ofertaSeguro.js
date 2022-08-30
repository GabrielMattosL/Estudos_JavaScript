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
    ],

    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)