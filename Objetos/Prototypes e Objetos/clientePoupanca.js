function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor
    };
}


function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call()
}