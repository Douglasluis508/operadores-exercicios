// # Exercício 3

// ### Parte 1
// Escreva as operações lógicas abaixo em formato de código.
// Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

// Exemplo:

// ```jsx
// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/
// ```

// ### Parte 2

// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: 
// Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, 
// recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na 
// empresa em 2019.**

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50 
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00
const vendasJaneiro = 5784.50 
const vendasFeveiro = 3418.40 
const vendasMarco = 4124.00 
const vendasAbril = 1874.00 
const vendasMaio = 7000.00 
const vendasJunho = 9450.00 

let comissaoSobreVendas = 0.1

// d)  Desconto do INSS 5% do salário
let descontoInss = 0.05
let salarioAposInss = 0.95

// 1) O salário fixo mais o auxílio creche
const salarioFixo = 2000.00
const auxilioCreche = 45.5*2
let fixoMaisCreche = salarioFixo + auxilioCreche
// 2) Quanto Fulano de Silva receberá de comissão em janeiro
let comissaJaneiro = vendasJaneiro * comissaoSobreVendas
console.log(comissaJaneiro);
// (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
let descontoJaneiro = (salarioFixo + comissaJaneiro) * descontoInss
console.log(descontoJaneiro);
// (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
let salarioLiquidoJaneiro = (salarioFixo + (vendasJaneiro * comissaoSobreVendas)) * salarioAposInss+auxilioCreche
let salarioLiquidoFevereiro = (salarioFixo + (vendasFeveiro * comissaoSobreVendas)) * salarioAposInss+auxilioCreche
let salarioLiquidoMarco = (salarioFixo + (vendasMarco * comissaoSobreVendas)) * salarioAposInss+auxilioCreche
let salarioLiquidoAbril = (salarioFixo + (vendasAbril * comissaoSobreVendas)) * salarioAposInss+auxilioCreche
let salarioLiquidoMaio = (salarioFixo + (vendasMaio * comissaoSobreVendas)) * salarioAposInss+auxilioCreche
let salarioLiquidoJunho = (salarioFixo + (vendasJunho * comissaoSobreVendas)) * salarioAposInss+auxilioCreche
// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
console.log(`O salário liqudido do mês de Janeiro é ${salarioLiquidoJaneiro}`);
console.log(`O salário liqudido do mês de Feveiro é ${salarioLiquidoFevereiro}`);
console.log(`O salário liqudi do mês de Março é ${salarioLiquidoMarco}`);
console.log(`O salário liqudi do mês de Abril é ${salarioLiquidoAbril}`);
console.log(`O salário liqudi do mês de Maio é ${salarioLiquidoMaio}`);
console.log(`O salário liqudi do mês de Junho é ${salarioLiquidoJunho}`);





// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e 
// dividindo pela quantidade de elementos somados. Por exemplo,
//  a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)
const mediaSalarial = salarioLiquidoJaneiro+salarioLiquidoFevereiro+salarioLiquidoMarco+salarioLiquidoAbril+salarioLiquidoMaio
+salarioLiquidoJunho / 6

console.log(mediaSalarial);