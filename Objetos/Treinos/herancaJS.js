class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;        
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
    
}

const Gabriel = new ClientePoupanca("Gabriel", "gabriel@email.com", "23467856487", 100, 200)

console.log(Gabriel.saldo, Gabriel.saldoPoupanca);
Gabriel.depositar(50);
Gabriel.depositarPoupanca(50);
console.log(Gabriel.saldo, Gabriel.saldoPoupanca);