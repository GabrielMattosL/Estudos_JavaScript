const cliente = {
    nome: "Gabriel",
    idade: 21,
    cidade: "Porto Velho",
    telefone: ["694563-4321", "695674-3245"]
}

cliente.animalDeEstimacao = [{
    nome: "Fred",
    tipo: "Felino",
    idade: 6,
    docil: false
}]

cliente.animalDeEstimacao.push({
    nome: "Levi",
    tipo: "Canino",
    idade: 1,
    docil: true
})

console.log(cliente)