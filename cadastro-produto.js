"use strict";
let cores = ["vermelho", "azul", "verde"];
var produtos = [];
let corSelect = document.getElementById("cor");
cores.forEach(cor => {
    let option = document.createElement("option");
    option.text = cor;
    option.value = cor;
    corSelect.append(option);
});
let tamanho = ["P", "M", "G"];
let tamanhoSelect = document.getElementById("tamanho");
tamanho.forEach(tamanho => {
    let option = document.createElement("option");
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.append(option);
});
function save() {
    let produtoInput = document.getElementById("produto");
    let corInput = document.getElementById("cor");
    let tamanhoInput = document.getElementById("tamanho");
    let preco = document.getElementById("preco");
    const produto = {
        id: crypto.randomUUID(),
        nome: produtoInput.value,
        cor: corInput.value,
        tamanho: tamanhoInput.value,
        preco: preco.value,
    };
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produto));
}
