// Operadores:

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

function areaRetangulo(){

    const comprimento = parseFloat(prompt("Digite o comprimento"));
    const largura = parseFloat(prompt("Digite a largura"));

    area = comprimento*largura;

    if(isNaN(area)){
        console.log("Insira dados numéricos")
        areaRetangulo()
    }else{
        return comprimento*largura;
    }
    
}

// area = areaRetangulo();
// console.log("A área do retângulo é:", area)

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

function parOuImpar(){

    const numero = parseFloat(prompt("Digite o numero"));

    const resto = numero%2

    if(isNaN(resto)){
        console.log("Digite um número inteiro")
        parOuImpar()
    }else if(Number.isInteger(resto)){
        if(resto == 0){
            console.log("O número é par")
        }else{
            console.log("O número é ímpar")
        }
    }else{
        console.log("Digite um número inteiro")
        parOuImpar()
    }

}

// parOuImpar()

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

function verificaStringJavaScript(){

    const palavra = prompt("Digite uma String");

    const flag = palavra.includes("JavaScript")

    if(flag){
        console.log("A string fornecida contém a palavra JavaScript")
    }else{
        console.log("A string fornecida não contém a palavra JavaScript")
    }

}

// verificaStringJavaScript();

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

function comparaString(){
    const primeiraPalavra = prompt("Digite a primeira String").toLowerCase();
    const segundaPalavra = prompt("Digite a segunda String").toLowerCase();

    if(primeiraPalavra == segundaPalavra){
        console.log("As duas string são iguais")
    }else {
        console.log("As duas string são diferentes")
    }

}

// comparaString();

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

function concatenarArray(array1, array2){

    return array1.concat(array2);
}

// console.log(concatenarArray([1,2,3,4], [5,6,7,8,9]))
// console.log(concatenarArray(['A',2,'C',4], [5,6,7,8,'D','E']))
// console.log(concatenarArray(['A',2,'C',4], [5,6,7,8,'D',['A',2,'C',4]]))

// Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

function callBackReduce(acumulador, elementoAtual, posicao, array){

    console.log("O valor atual é:", acumulador);
    console.log("O elemento atual é:", elementoAtual);
    console.log("A posição atual é:", posicao);
    console.log("O array em que estamos aplicando o reduce é:", array);

    return acumulador + elementoAtual
}


function calculaMedia(array){

    const soma = array.reduce(callBackReduce, 0)
    const numeroDeElementos = array.length

    console.log("A média é:", soma/numeroDeElementos)
}

// calculaMedia([5,5,5,5])

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".



// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

function maxArray(array){

    let max = 0;

    for(var i = 0; i < array.length; i++){
        max = Math.max(max,array[i])
        console.log(max)
    }
    console.log("O valor máximo do array é:", max)
}

// maxArray([51,52,42,4123,5])

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos. 

function numerosAleatorios(){

    var piso = parseFloat(prompt("Digite o piso do número aleatório"));
    var teto = parseFloat(prompt("Digite o teto do número aleatório"));

    var trocador = 0;

    if(piso > teto){
        trocador = piso;
        piso = teto;
        teto = trocador;
    }
    console.log("piso", piso)
    console.log("teto", teto)

    return Math.random() * (teto - piso) + piso;


}

// console.log(numerosAleatorios())

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

function primo(){
    const numero = parseFloat(prompt("Digite um número que você quer verificar se ele é primo"));

    if(isNaN(numero) || !Number.isInteger(numero) || numero < 0){
        console.log("Digite um número inteiro não negativo")
    }else{
        var contador = 0;
        for(var i = 0; i < numero; i++){
            if(numero%i == 0 ){
                contador = contador +1;
            }
        }

        if(contador == 1){
            console.log("O número ", numero, " é primo.")
        }else{
            console.log("O número ", numero, " não é primo" )
        }
    
    }
    
 

}

// primo()

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número).Multiplique as duas variáveis e explique o resultado. 

function exercicio11(){

    let variavelString = "25"

    let variavelNumber = 2

    console.log("O tipo a variável string é: ",typeof(variavelString))
    console.log("O tipo a variável number é: ",typeof(variavelNumber))

    console.log("O resultado da multiplicação é: ", variavelString*variavelNumber)

    console.log("O resultado foi 50, ou seja, muito provavelmente o compilador JavaScript transformou a variável declarada como string em number")


}

// exercicio11()

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável. 

function exercicio12(){

    let variavelExercicio12String = "123"
    let variavelExercicio12Number = parseInt(variavelExercicio12String)

    console.log("O tipo a variável string é:",variavelExercicio12String, typeof(variavelExercicio12String))
    console.log("O tipo a variável number é:",variavelExercicio12Number, typeof(variavelExercicio12Number))


}

// exercicio12()

// 13- Escreva um programa que adicione um número e uma string. 

function exercicio13(){

    let variavelString = "a"
    let variavelNumero = 2

    console.log(variavelString+variavelNumero)

}

// exercico13()


// 14- Explique o resultado e discuta a coerção que ocorre. 

// O resultado do exercício 13 é que a adição de uma string com um number foi, na verdade, uma concatenação.
// Muito provavelmente o compilador JavaScript interpretou a variável do tipo Number em String.


// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo. 

function exercicio15(){

    const variavelNull = null;
    const variavelUndefined = undefined;

    console.log("As variáveis são iguais em tipo e valor?", variavelNull===variavelUndefined)

}

// exercicio15()

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

function exercicio16(variavel){

    if(typeof(variavel) == "function"){
        console.log("A variável é do tipo função")
    }else{
        console.log("A variável não é do tipo função, ela é do tipo:", typeof(variavel))
    }

}

// exercicio16(1)
// exercicio16("1")
// exercicio16(exercicio11)


// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

function exercicio18(){
    console.log((10 + 5) * 3 / 20)
}

// exercicio18()

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

function exercicio19(){

    var numero = parseFloat(prompt("Digite um número inteiro"));

    console.log(numero)

    if(numero > 0 && numero % 2 !== 0){
        console.log("Sim, o número passado é positivo e ímpar")
    }else{
        console.log("Não, o número passado não é ao mesmo tempo positivo e ímpar")
    }

}

// exercicio19()
// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras:
// (a) Anos divisíveis por 4 são bissextos;
// (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400. 



function divisivelPorQuatro(numero){
    if(numero%4 == 0 ){
        return true
    }else{
        return false
    }

}

function divisivelpor100(numero){
    if(numero%100 == 0 ){
        return true
    }else{
        return false
    }
}

function divisivelpor400(numero){
    if(numero%400 == 0 ){
        return true
    }else{
        return false
    }
}

function anoBissexto(ano){

    // var ano = parseFloat(prompt("Digite um ano"));

    if ((divisivelPorQuatro(ano) && !divisivelpor100(ano)) || divisivelpor400(ano)){
        console.log("O ano ", ano, "é bissesxto")
    }else{
        console.log("O ano ", ano, "não é bissexto")
    }

}

// anoBissexto(1600);
// anoBissexto(1604);
// anoBissexto(1608);
// anoBissexto(1992);
// anoBissexto(1996);
// anoBissexto(1997);
// anoBissexto(2000);
// anoBissexto(2004);
// anoBissexto(2008);
// anoBissexto(2012);
// anoBissexto(2016);
// anoBissexto(2020);




// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube:
// idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos). 

function idadePermitida(idade){
    return idade >= 18
}

function membrosBanidos(nome){

    let banidos = ["Joao", "Patricia", "Jose", "Maria", "Felipe"]
    
    return banidos.includes(nome);

}

function permissaoClube(idade, nome){

    if(idadePermitida(idade) && !membrosBanidos(nome)){
        console.log("Pessoa liberada, tem a idade mínima e não está banida")
    }else{
        console.log("Pessoa não liberada, não possui idade mínima ou está banida")
    }

}

// permissaoClube(18, "Joao")
// permissaoClube(18, "Joao Pedro")
// permissaoClube(27, "Maria")
// permissaoClube(15, "Fabricio")


// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.


function simulaLogin(usuario, senha){

    let usuariosSenhas = {
        joao : "123",
        maria : "adacoders",
        felipe : "21021995"
    }

    if(usuariosSenhas[usuario] == senha){
        console.log("Login realizado com sucesso")
    } else {
        console.log("Login não efetuado, verifique usuário e senha")
    }

}

simulaLogin("joao", "123")
simulaLogin("joao", "1234")
simulaLogin("maria", "1234")
simulaLogin("maria", "adacoders")
simulaLogin("felipe", "21021995")