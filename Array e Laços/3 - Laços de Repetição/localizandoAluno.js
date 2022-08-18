const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

let listaMista = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaMista[0].includes(nomeDoAluno)) {
        let indice = listaMista[0].indexOf(nomeDoAluno)
        return listaMista[0][indice] + ', sua média é ' + listaMista[1][indice]
    } else {
        return "aluno não cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))