let cores = ["vermelho" , "azul" ,"verde"]
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
