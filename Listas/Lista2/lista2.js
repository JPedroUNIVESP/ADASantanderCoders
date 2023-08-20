// Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

function questao_1 (){

    const estudante = {
        nome: "Joao",
        idade: 28,
        curso: "JavaScript",
        notas: [8,7,6,4,3]
    }
    

    console.log(`Nome: ${estudante.nome}`)
    console.log(`Idade: ${estudante.idade}`)
    console.log(`Curso: ${estudante.curso}`)
    console.log(`Notas: ${estudante.notas}`)

}

// questao_1 ()

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

function questao_2(){

    const paises = {
        Argentina:'Buenos Aires',
        Bolivia:'La Paz',
        Brasil:'Brasília',
        Chile:'Santiago',
        Colombia:'Bogotá',
        Equador:'Quito',
        Guiana:'Georgetown',
        Guiana_Francesa:'Caiena',
        Paraguai:'Assunção',
        Peru:'Lima',
        Suriname:'Paramaribo',
        Uruguai:'Montevidéu',
        Venezuela:'Caracas'
    }

    function capitais(pais){
        console.log(paises[pais])
    }

    capitais('Brasil')
    capitais('Bolivia')
}

// questao_2()

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

function questao_3(){

    const frutas = {
        melancia: 2.30,
        banana: 5.29,
        abacate: 3.50
    }

    let preco_total = 0 

    for(x in frutas){
        preco_total += Number(frutas[x])
    }

    console.log(preco_total)


}

// questao_3()

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

function questao_4(){
    const livro = {
        
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        ano_publicacao: 1997,
        paginas: 208
    }

    for(x in livro){
        console.log(`${x}: ${livro[x]}`)
    }
}

// questao_4()

// Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

function questao_5(){

    const numeros = [1,2,3,4,5]

    let numeros_quadrado =numeros.map((element, e)=>{
        return element*element
    })

    console.log(numeros_quadrado)
}

// questao_5()

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

function questao_6(){

    const palavras = ["dado", "um", "array", "de", "palavras"]

    let palavras_maiusculo = palavras.map((elemento) =>{
        return elemento[0].toLocaleUpperCase()
    })

    console.log(palavras_maiusculo)

}

// questao_6()


// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).

function questao_7(){
    const  objetos = [
        {
            nome:"Mouse",
            preco: 150,
            quantidade: 2
        },
        
        {
            nome:"Teclado",
            preco: 350,
            quantidade: 3
        },
        
        {
            nome:"Placa de Video",
            preco: 1500,
            quantidade: 1
        }
    ]


    objetos.map((elemento) =>

        console.log(`O preço total de ${elemento.nome} é ${elemento.quantidade*elemento.preco}`)

    )

}

// questao_7()

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

function questao_8(){

    const temperatura = [10, 20 , 30, 40, 50]

    let temperatura_f = temperatura.map((elemento)=>{
    return ((elemento*9/5) + 32)
    })

    console.log(temperatura_f)
}


// questao_8()

// Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

function questao_9(){

    const numeros = [1,2,3,4,5,6]

    let numero_reduce = numeros.reduce((elemento, elementoAtual)=> {

        return elemento + elementoAtual

    })

    console.log(numero_reduce)

}

// questao_9()

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

function questao_10(){

    const palavras = ["Crie", "um", "array", "de", "string"]

    let palavras_concat =  palavras.reduce((elemento, elementoAtual) => {

        return elemento+elementoAtual

    })

    console.log(palavras_concat)
}

// questao_10()

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.

function questao_11() {
    const arrayObjetos = [
        { valor: 1000, categoria: 'aluguel' },
        { valor: 500, categoria: 'alimentacao' },
        { valor: 200, categoria: 'alimentacao' },
        { valor: 250, categoria: 'alimentacao' }
    ]

    let totalEspecifico = arrayObjetos.reduce((acumulador, elementoAtual) => {

        if (elementoAtual.categoria === 'alimentacao') {
            return acumulador + elementoAtual.valor;
        }
        return acumulador;
    }, 0);

    console.log(totalEspecifico);
}

// questao_11();

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

function questao_12(){

    const arrayNumeros = [1,6,3,8,10,15,2,3,4,1,1]

    let maior = arrayNumeros.reduce((acumulador, elementoAtual)=>{

        if(acumulador >= elementoAtual){
            return acumulador
        }else{
            return elementoAtual
        }

    })

    console.log(maior)
}

// questao_12()


// Laços de Repetiçoes

// 13- Imprima os números de 1 a 10 utilizando um loop for.

function questao_13 (){

    for(let i = 1; i< 11; i++) {
        console.log(i)
    }
}

//questao_13()


// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

function questao_14(){

    for(let i = 1; i<= 20; i++) {
        
        if(i%2 == 0){
            console.log(i)
        }
        
    }
}

// questao_14()


// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.

function questao_15(){

    let soma = 0

    for(let i = 1; i<=50; i++){

        soma += i;
    }

    console.log(soma)
}

// questao_15()

// 16- Imprima a tabuada do 7 utilizando um loop for.

function questao_16(){
    for(let i = 1; i <=10 ; i++){
        console.log(i*7)
    }
}

// questao_16()


// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.

function questao_17(){
    let numero = Number(prompt("Insira um numero"));

    for(let i = 1; i<=numero; i++){
        console.log(i)
    }

}

// questao_17()

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

function questao_18(){

    let numero = Number(prompt("Insira um numero"));

    let contador = 0;

    for(let i = 1; i < numero ; i++){

        if(numero%i == 0 ){
            contador += 1;
        }

    }

    if(contador == 1){
        console.log(`O numero ${numero} é primo`)
    }else{
        console.log(`O numero ${numero} não é primo`)
    }

}

// questao_18()

// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)

function questao_19(){

    let primeiro = 0;
    let segundo = 1;

    for(let i = 0; i<=10; i++){

        console.log(primeiro);

        let intermediario = primeiro;
        primeiro = segundo;
        segundo = segundo + intermediario;

    }

}

// questao_19()

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

function questao_20(){

    let numero = Number(prompt("Insira um numero"));

    let fatorial = 1;

    if(numero == 0 ){
        console.log(fatorial)
    }else{
        while(numero > 0){

            fatorial *= numero;

            numero -=1;
        }

        console.log(fatorial)
    }

}

// questao_20()

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

function questao_21(){

    let numero = Number(prompt("Insira um numero"));

    let naturais = []

    for(let i = 1; i<= numero; i++){
        naturais.push(i)
    }

    
    for(let i = 0; i<=numero-1; i++){

        let atual = i;
        let acumulador = 0;

        while(atual >= 0 ){

            acumulador += naturais[atual]
            atual --;

        }

        console.log(acumulador)

    }

}

// questao_21()


// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. 
// Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

function questao_22(){


    let numero = 1000

    for(let i = 1; i <=1000; i++){
        
        let divisores = []

        for(let j = 1; j < i; j++){
            if(i%j == 0 ){
                divisores.push(j)
            }
        }

        let soma = divisores.reduce((acumulador, elementoAtual) => {

            return acumulador + elementoAtual;
        }, 0 )

        if(i == soma){
            console.log(i)
        }


    }

}

// questao_22()

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número.
// O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.


function questao_23(){

    const numeroSorteado = Math.floor(Math.random() * 100);

    let errou = true;

    while(errou){

        let numero = Number(prompt("Insira um numero"));

        if(numero == numeroSorteado){
            errou = false;
        }else if(numero > numeroSorteado){
            console.log("Seu palpite é maior")
        }else{
            console.log("Seu palpite é menor")
        }

    }

    console.log("Você acertou!")
    
}

// questao_23()

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.

// Condicionais

// 31- Verificação de vogal ou consoante

// Peça ao usuário para digitar uma letra. Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante. Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

// 32- Calculadora simples

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /). Use uma estrutura condicional para realizar a operação selecionada nos números dados. Exiba o resultado da operação.

// 33- Verificação de número primo

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo). Exiba uma mensagem indicando se o número é primo ou não.

// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius. Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário. Exiba o resultado da conversão.

// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana. Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano. Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400). Exiba uma mensagem indicando se o ano é bissexto ou não.

// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para contar o número de vogais e consoantes na entrada. Exiba os resultados separadamente.

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número. Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero. Exiba uma mensagem indicando a natureza do número.

// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não"). Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10. Exiba o preço do bilhete.

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase. Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás). Exiba uma mensagem indicando se a entrada é um palíndromo ou não.