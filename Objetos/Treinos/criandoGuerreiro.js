const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiro = {fichaGuerreiro, equipoGuerreiro}
console.log(guerreiro)

const guerreiro2 = {...fichaGuerreiro, ...equipoGuerreiro}
console.log(guerreiro2)