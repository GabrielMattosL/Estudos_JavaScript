const livros = require('../1 - Introdução/filtrandoLivro')
const menorValor = require('../1 - Introdução/menorValor')

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];
    console.log("o livro atual é ",livros[atual])
    let livroMenorPreco = livros[menor];
    console.log("o menor livro é ",livros[menor])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)