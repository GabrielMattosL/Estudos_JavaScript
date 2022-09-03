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

//criando o objeto Andre
const Andre = new Cliente("Andre", "andre@email.com", "34556745623", 100)

Andre.exibirSaldo()
Andre.depositar(20)
Andre.exibirSaldo()
// console.log(Andre)
