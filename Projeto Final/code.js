// Define algumas constantes

let tentativas = 5;

// Cria banco de palavras

const bancoDePalavras = ["abacate", "amora", "jogo", "palavra", "computador", "mouse"]

// Sorteia um número aleatório

const numeroSorteado = Math.floor(Math.random() * bancoDePalavras.length);

// Sorteia uma palavra

const palavraSecreta = bancoDePalavras[numeroSorteado]

// Declara array de palavras corretas e erradas

const corretas = []
const erradas = []

// Define função que insere a palavra 

function inserePalavra () {

    const inserirPalavra = document.getElementById("palavraSecreta")

    let tentativa = ""

    for(letra in palavraSecreta){

        if(corretas.includes(palavraSecreta[letra])){

            tentativa = tentativa + " " + palavraSecreta[letra]

        }else {
            tentativa = tentativa + " _"
        }

    }

    inserirPalavra.innerHTML = tentativa

}

// Faz função que verifica que se a letra inserida é uma letra errada ou não

function letraCertaErrada(){

    var letra = document.getElementById("texto").value.toLowerCase();

    if(letra.length > 1){

        alert("Insira apenas uma letra")

    }else {

        if(palavraSecreta.includes(letra)){

            if(!corretas.includes(letra)){

                corretas.push(letra)

            }

        }else {

            if(!erradas.includes(letra)){

                erradas.push(letra)

                tentativas = tentativas - 1;
            }

        }

    }
    letra.value = "";

}

// Atualiza tentativas

function atualizaTentativaCorretasErradas(){

    var numTentativas = document.getElementById("tentativas")
    var letrasCorretas = document.getElementById("corretas")
    var letrasErradas = document.getElementById("erradas")

    numTentativas.innerText = "Tentativas: " + (tentativas)

    if(corretas.length > 0 || erradas.length > 0 ){
    
        letrasCorretas.innerText = "Letras corretas: " + corretas

    
        letrasErradas.innerText = "Letras erradas: " + erradas
    
    }

}


// Verifica se ganhou ou perdeu

function verificaGanhouPerdeu(){

    if(tentativas==0){

        alert("Perdeu! Suas tentativas acabaram")

        location.reload();

    } 

    const palavraFinal = document.getElementById("palavraSecreta").innerText.replace(/\s+/g, '');

    if(palavraFinal === palavraSecreta){

        alert("Você ganhou! Acertou a palavra!")

        location.reload();

    }

}

// Cria função que limpa o campo em que o usuário insere a letra

function limpaCampo(){

    var inputElement = document.getElementById("texto");

    inputElement.value = "";

}


// Cria código que faz com que o usário clicar "ENTER", a função clicaBotao é disparada
// Sem esse código abaixo, o usuário teria que clicar no botão toda em vez

document.getElementById("texto").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        clicaBotao();
    }
});


// Executa funções que serão executadas ao abrir a página:

// Insere palavra na div com id palavraSecreta

inserePalavra()

// Atualiza tentativas

atualizaTentativaCorretasErradas()


// Função que dispara ao clicar o botão

function clicaBotao(){
    
    letraCertaErrada()
    inserePalavra()
    atualizaTentativaCorretasErradas()
    verificaGanhouPerdeu()
    limpaCampo()
    
}