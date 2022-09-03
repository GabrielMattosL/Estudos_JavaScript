class Cliente {
    //construtor
    constructor(nome, email, cpf, saldo) {
    //atributos
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    //metodos
    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

//classe cliente poupança puxando as caracteristicas da classe cliente
class ClientePoupanca extends Cliente {

//construtor do cliente poupança
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        //super escolhe quais atributos vão ser herdados
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    
    exibirSaldoPoupanca() {
        console.log(this.saldoPoupanca);
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}
//objeto do Andre
const Andre = new ClientePoupanca ("Andre", "andre@email.com", "23456787643", 100, 200)

console.log(Andre.saldo, Andre.saldoPoupanca)
Andre.depositar(50)
Andre.depositarPoupanca(50)
console.log(Andre.saldo, Andre.saldoPoupanca)