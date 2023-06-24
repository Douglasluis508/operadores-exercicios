// # Exercício 1

// Construa um programa que:

// a) Peça ao usuário que insira um número **par**

// b) Imprima no console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código.

// >💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número


const inserirNumero = ()=>{
    let numeroPar =Number(prompt('Insira um número par'));
    console.log(numeroPar);
    let restoDivisao = numeroPar %2
    console.log(restoDivisao)// Usando o %2 em qualquer número par o resultado será 0 (true)
    // Se o usuário inserir um número ímpar o resta da será 1
    return (numeroPar, restoDivisao)
};

inserirNumero()
