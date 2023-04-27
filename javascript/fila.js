let fila = [''];
let tail = 0;
let head = 0;


function clear(){
    fila = ['']
    head = 0; 
    tail = 0; 
    console.log('Tail =',tail)
    console.log('head =',head)
}

function mostrarFila() {
    console.log(fila);
    return main();
}

function add() {
    let valor;
    if(fila.length > tail){
    valor = prompt("Escreva um valor a ser adicionado\n");
    fila.unshift(valor);
    tail = tail + 1;
    mostrarFila();
    console.log('Tail =',tail)
    }
    return main();
}


function remover() {
    if(head<tail){
        fila.shift()
        tail--;
        head++;
        console.log('Valor removido!!!')
        mostrarFila();
        console.log('Tail =',tail)
        console.log('Head =',head)
    }
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
      console.log(add())
      break;
  }else if(opcao == 2){
       console.log(remover())
       break;
  }else if (opcao == 3){
       console.log(mostrarFila())
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