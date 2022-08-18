//adicionando
const frutas = ["Banana", "Maçã", "Kiwi", "Abacate"]
//depois do 2° item, não remove nada, adiciona "Laranja" e "Uva";
frutas.splice(2, 0, "Laranja", "Uva");

console.log(frutas)

//removendo
const frutas2 = ["Banana", "Maçã", "Kiwi", "Abacate"]
//apartir do 2° item, remove dois, não faz nada;
frutas2.splice(2, 2)

console.log(frutas2)

//substituindo
const frutas3 = ["Banana", "Maçã", "Kiwi", "Abacate"]
//apartir do 1° item, remove dois, adiciona "Pera";
frutas3.splice(1, 2, "Pera")

console.log(frutas3) 
