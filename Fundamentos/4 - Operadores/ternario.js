const idadeMinima = 18;
const idadeCliente = 20;

//forma comum
if (idadeCliente >= idadeMinima) {
    console.log("Pode comprar sua mercadoria, você é possui a idade permitida!!")
} else {
    console.log(`Você possuí ${idadeCliente} anos, não pode consumir bebidas!!`)
}

//forma resumida
                    //condição            //true     //false
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");