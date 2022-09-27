const livros = require('../1 - Introdução/filtrandoLivro');
const troca = require('../3 - Insertion Sort/troca');

function insertionSort(lista) {

for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;
    // verifica se o número é maior do que 0 e se o valor é menor que o anterior
    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
        troca(lista, analise);
        // subtrai 1 de analise e volta para o começo do while
        analise--
    }
}

    console.log(lista);
}

insertionSort(livros)