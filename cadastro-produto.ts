let cores = ["vermelho" , "azul" ,"verde"]
var produtos : {id:string, nome:string , cor:string, tamanho:string, preco:string} [] = []
let corSelect = document.getElementById("cor") as HTMLSelectElement;

cores.forEach(cor =>{
    let option  =document.createElement("option");
    option.text = cor;
    option.value = cor;
    corSelect.append(option);
})

let tamanho = ["P" ,"M" , "G"]
let tamanhoSelect = document.getElementById("tamanho") as HTMLSelectElement;

tamanho.forEach(tamanho =>{

    let option = document.createElement("option");
    option.text = tamanho;
    option.value = tamanho;
    tamanhoSelect.append(option);
}
    )

function save(){
    let produtoInput = document.getElementById("produto") as HTMLSelectElement;
    let corInput = document.getElementById("cor") as HTMLSelectElement;
    let tamanhoInput = document.getElementById("tamanho") as HTMLSelectElement;
    let preco = document.getElementById("preco") as HTMLSelectElement;
    
    const produto={
        id : crypto.randomUUID(),
        nome: produtoInput.value,
        cor: corInput.value,
        tamanho: tamanhoInput.value,
        preco: preco.value,



    }

    produtos.push(produto)
    localStorage.setItem('produtos' , JSON.stringify(produto))
}