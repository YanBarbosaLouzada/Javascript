let lista = [];
let numero;


function main() {
    do {
        var opcao = 0;
        console.log("\nSELECIONE A OP��O ABAIXO:\n\n");
        console.log("[1] - Inserir (Enqueue)\n");
        console.log("[3] - Listar\n");
        console.log("[-1] - Sair\n");
        opcao = prompt("\nDigite a op��o desejada: \n");
        if (opcao == 1) {
            console.log(d())
            break;
        } else if (opcao == 3) {
            console.log(lista)
            break;
        } else if (opcao == -1) {
            break
        }
    } while (opcao != -1);
}


function d() {
    numero = prompt('digita um numero')
    return checar();
}


function checar() {
    for (i = 0; i < 10; i++) {
        if (lista[i] === numero && numero !== '0') {
            alert('nao deu');
        } else {
            lista.push(numero)
            alert("deu")
        }
        return ver();
    }
}

function ver() {
    for (i = '0'; i < lista.length; i++) {

        if (lista[i] === '0') {
            lista.splice([i] - 1, 2)
        }
    }
    return main();
}

console.log(main());