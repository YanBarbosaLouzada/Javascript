var pilha = [];
var topo = 0;


function listar() {
    console.log(pilha);
    return main();
}

function colocar(){
   let valor; 
   valor = prompt('Digite um valor a ser colocado na pilha'); 
   if(pilha.length < 11){
     pilha.push(valor);  
   }
   topo++;
   console.log(listar());
   return main();
}
function retirar(){
    let valor = 0;
    if(topo > 0 ){
        pilha.pop(valor);
    }
    topo--;
    console.log(listar())
    return main();
}

function clear(){
    for (i=0;i<11;i++){
        pilha[i]=0
    }
    topo = 0
    console.log(listar());
    return main();
}

function main(){
do{
    var opcao = 0;
    console.log("\nSELECIONE A OP��O ABAIXO:\n\n");
    console.log("[1] - Inserir (Enqueue)\n");
    console.log("[2] - Remover (Dequeue)\n");
    console.log("[3] - Listar\n");
    console.log("[4] - Limpar a fila (Clear)\n");
    console.log("[-1] - Sair\n");
    opcao = prompt("\nDigite a op��o desejada: \n");
  if(opcao == 1){
      console.log(colocar())
      break;
  }else if(opcao == 2){
       console.log(retirar())
       break;
  }else if (opcao == 3){
       console.log(listar())
       break;
  }else if (opcao == 4){
      console.log(clear())
      break;
  }else if(opcao == -1){
      break
  }
}while(opcao != -1);

}
console.log(main());

