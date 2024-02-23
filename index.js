"use strict";
let nomeCompleto = "Gustavo Campos";
const pi = 3.14;
let idade = 20;
console.log(nomeCompleto);
//let frase:string = "Olás"
//let peso:number = 85
//let estaAprovado:boolean = true
//let texto = `${frase} ${nomeCompleto}.Você tem ${idade} anos e pesa ${peso} kg.`
//console.log(texto)
//arrays
let texto2 = [];
let texto3 = ["Ola", "mundo"];
console.log("arrey texto 2: ");
texto2.push("Teste");
console.log(`Array tamanho:${texto2.length} `);
texto2.forEach(item => {
    console.log(item);
});
let numeros = [];
numeros.push(50, 30, 56);
for (let index = 0; index <= numeros.length; index++) {
    console.log(numeros[index]);
}
//objeto
let listarPessoas = [];
let pessoa = {
    nome: "gustavos",
    idade: 25
};
listarPessoas.push(pessoa);
let outraPessoa = {
    nome: "gustavo 2",
    idade: 20
};
listarPessoas.push(outraPessoa);
console.log(listarPessoas);
console.log();
