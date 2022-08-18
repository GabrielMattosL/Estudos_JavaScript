const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius,', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2, nomes.length);

console.log(`Os alunos da sala1 são: ${sala1}`);
console.log(`Os alunos da sala2 são: ${sala2}`);