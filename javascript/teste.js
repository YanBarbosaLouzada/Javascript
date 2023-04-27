var trem = [];
let viagens = document.querySelector('#quantidade');
let mostrar =  document.getElementById('twt')
var input = document.querySelector('#send')
input.addEventListener('click',function(e){
    var inputpessoas = document.querySelector('#inputpessoas')
    var pessoas =  inputpessoas.value 
function comeco(){ 
    console.log(viajar())
    
} 
function viajar (){  
    
    
    for (i=0; i < 11; i++){
        
        if(pessoas > 0){
          pessoas--  
        }
    }
    mostrar.innerHTML = pessoas--
    viagens.innerHTML++ 

   

    
    if(pessoas > 0){
    console.log(viajar())
    
    }else {
        console.log('\n---------------x-------------------\n')
        console.log('\nBoas ferias!!!')
        console.log('\n---------------x-------------------\n')
    }
   
    
    return 0;
}

console.log(comeco());

}) 


/**
 * 
 * Função para execução em console
 * 
 * var trem = [];
let pessoas;
let viagens = 0;
function comeco(){
    pessoas = prompt('Digite a quantidade de pessoas que deseja levar!!!\n')
    console.log(viajar());
    return 0;
}


function viajar (){
    for (i=0; i < 11; i++){
        if(pessoas > 0){
             pessoas--
            
        }
    }
    viagens++;
    console.log('\n---------------x-------------------\n')
    console.log('\nFizemos ' +viagens+ ' viagens\n') 
    console.log('\nTemos '+pessoas+' pessoas\n')
    console.log('\n---------------x-------------------\n')
    if(pessoas > 0){
    console.log(viajar())
    
    }else {
        console.log('\n---------------x-------------------\n')
        console.log('\nBoas ferias!!!')
        console.log('\n---------------x-------------------\n')
    }
   
    
    return 0;
}



console.log(comeco());


 * 
 * 
 * 
*/

