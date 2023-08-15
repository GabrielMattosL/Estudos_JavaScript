function fizzbuzz(x) {
    if(isNaN(x)) return x;
    if(x%3==0 && x%5==0) return 'FizzBuzz';
    if(x%3==0) return 'Fizz';
    if(x%5==0) return 'Buzz';
    return x


    // if(isNaN(x)) {
    //     return 'Não é um número'
    // } else if(x < 0 || x > 100) {
    //     return 'O número não está entre 0 e 100'
    // } else if() {

    // } else if(x%3==0 && x%5==0) {
    //     return 'passou'
    // } else {
    //     return x
    // }
}

for(let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
}

// abc = 16%3==0
// console.log(abc)